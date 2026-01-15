import { NextButton, Typography } from '@/shared/ui';
import { StyleSheet, useUnistyles, withUnistyles } from 'react-native-unistyles';
import { SquircleButton, SquircleView } from 'expo-squircle-view';
import { Alert, View } from 'react-native';
import { CheckSvg, SparkleSvg } from '@/shared/assets';

const RNButon = withUnistyles(SquircleButton);
const RNView = withUnistyles(SquircleView);
interface HomeGrowthPathCardProps {
  status?: 'completed' | 'inProgress' | 'locked';
  title?: string;
  lessonId?: number;
}

export const HomeGrowthPathCard = ({
  status = 'inProgress',
  title = 'Pet Chance',
  lessonId,
}: HomeGrowthPathCardProps) => {
  const { theme } = useUnistyles();

  const handleButtonClick = () => {
    if (status === 'inProgress') {
      console.log('Start lesson');
    } else if (status === 'locked') {
      Alert.alert('Урок закрыт', 'Этот урок пока недоступен. Завершите предыдущие уроки.');
    }
  };
  return (
    <RNButon
      onPress={handleButtonClick}
      style={styles.container(status)}
      preserveSmoothing
      activeOpacity={0.9}
      borderRadius={20}
      cornerSmoothing={80}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
        {status === 'completed' && (
          <RNView
            style={styles.iconContainer(status)}
            borderRadius={12}
            cornerSmoothing={80}
            preserveSmoothing>
            {status === 'completed' ? (
              <CheckSvg
                width={45}
                height={45}
                stroke={theme.colors.green}
                fill={theme.colors.typography}
              />
            ) : (
              <SparkleSvg width={30} height={30} fill={'#F4C542'} />
            )}
          </RNView>
        )}

        <View style={styles.content}>
          <Typography
            size={18}
            weight="bold"
            style={{ textDecorationLine: status === 'completed' ? 'line-through' : 'none' }}
            color={status === 'completed' ? 'green' : 'typography'}>
            {title}
          </Typography>
          {status === 'inProgress' && (
            <View style={styles.progressBar}>
              <View style={styles.progressCircle} />
              <Typography size={16} weight="bold" color="typography" style={styles.progressText}>
                0 / 1
              </Typography>
            </View>
          )}
        </View>
      </View>
      {status !== 'completed' && (
        <NextButton action={handleButtonClick} disabled={status === 'locked'} />
      )}
    </RNButon>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: (status: 'completed' | 'inProgress' | 'locked') => ({
    width: '100%',
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: status === 'completed' ? theme.colors.softGreen : theme.colors.gray,
  }),
  iconContainer: (status: 'completed' | 'inProgress' | 'locked') => ({
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: status === 'completed' ? 'transparent' : theme.colors.tertiary,
  }),
  content: {
    gap: 12,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 30,
    paddingHorizontal: 6,
    paddingRight: 16,
  },
  progressCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F4C542',
  },
  progressText: {
    flex: 1,
    textAlign: 'center',
  },
}));
