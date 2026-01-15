-- 1) lessons: справочник уроков
create table lessons (
  id bigint primary key,
  title text not null,
  "order" int not null,
  is_published boolean not null default true
);

-- 2) user_lesson_progress: прогресс (связка user ↔ lesson)
create type lesson_status as enum ('locked','active','done');

create table user_lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id bigint not null references lessons(id) on delete cascade,
  status lesson_status not null default 'locked',
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id) -- unique связь user+lesson
);

create index ulp_user_id_idx on user_lesson_progress (user_id);

-- как связать пользователя и статус урока?
-- user_id + lesson_id -> одна строка на урок на пользователя, status внутри

-- как эффективно отдавать на фронт список "open/closed"?
-- 1 запрос: lessons + левый джойн прогресса конкретного юзера
-- (если записи нет -> locked)
create view v_user_lessons as
select
  l.id,
  l.title,
  l."order",
  coalesce(p.status, 'locked'::lesson_status) as status
from lessons l
left join user_lesson_progress p
  on p.lesson_id = l.id;

-- пример запроса для rn/expo:
-- select id, title, status
-- from v_user_lessons
-- where is_published = true
-- and (p.user_id = :uid)  -- в supabase лучше делать это как rpc, см. ниже
-- order by "order";

--  rpc чтобы передать uid и не тащить лишнее:
create or replace function get_user_lessons(uid uuid)
returns table (id bigint, title text, "order" int, status lesson_status)
language sql stable as $$
  select
    l.id,
    l.title,
    l."order",
    coalesce(p.status, 'locked'::lesson_status) as status
  from lessons l
  left join user_lesson_progress p
    on p.lesson_id = l.id and p.user_id = uid
  where l.is_published = true
  order by l."order";
$$;

-- фронт: supabase.rpc('get_user_lessons', { uid: user.id })
