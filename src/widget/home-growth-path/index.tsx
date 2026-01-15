import { FlatList, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { HomeGrowthPathCard } from './card';
import { ProgressLine } from './progress-line';
import { LESSONS_DATA, Lesson } from './constants';

const mapStatus = (status: 'done' | 'active' | 'locked'): 'completed' | 'inProgress' | 'locked' => {
  switch (status) {
    case 'done':
      return 'completed';
    case 'active':
      return 'inProgress';
    case 'locked':
      return 'locked';
  }
};

export const HomeGrowthPath = () => {
  const renderItem = ({ item, index }: { item: Lesson; index: number }) => {
    const mappedStatus = mapStatus(item.status);

    return (
      <View style={styles.cardWrapper}>
        <ProgressLine
          status={mappedStatus}
          isLast={index === LESSONS_DATA.length - 1}
          isFirst={index === 0}
        />
        <View style={styles.cardContent}>
          <HomeGrowthPathCard status={mappedStatus} title={item.title} lessonId={item.id} />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={LESSONS_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create(() => ({
  container: {
    position: 'relative',
  },
  cardWrapper: {
    position: 'relative',
    flexDirection: 'row',
  },
  cardContent: {
    flex: 1,
    marginLeft: 36,
  },
}));
