import { CheckSvg } from '@/shared/assets';
import { Layout, Typography } from '@/ui';
import { HomeGrowthPath } from '@/widget/home-growth-path';

export const Home = () => {
  return (
    <Layout>
      <Typography size={25} weight="semibold" color="typography" style={{ marginBottom: 15 }}>
        Growth Path
      </Typography>
      <HomeGrowthPath />
    </Layout>
  );
};
