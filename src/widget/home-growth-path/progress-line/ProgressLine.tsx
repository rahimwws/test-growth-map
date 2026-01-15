import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { CheckSvg } from '@/shared/assets';

interface ProgressLineProps {
  status: 'completed' | 'inProgress' | 'locked';
  isLast?: boolean;
  isFirst?: boolean;
}

export const ProgressLine = ({ status, isLast, isFirst }: ProgressLineProps) => {
  return (
    <View style={styles.container}>
      {/* Верхняя линия */}
      {!isFirst && <View style={styles.lineTop} />}

      {/* Кружок-индикатор */}
      <View
        style={[
          styles.circle,
          status === 'completed' && styles.circleCompleted,
          status === 'locked' && styles.circleLocked,
        ]}>
        {status === 'completed' && <CheckSvg width={14} height={14} stroke="white" fill="white" />}
      </View>

      {/* Нижняя линия */}
      {!isLast && <View style={styles.lineBottom} />}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    width: 24,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.tertiary,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  circleCompleted: {
    borderColor: '#12BB44',
    backgroundColor: '#12BB44',
  },
  circleLocked: {
    borderColor: theme.colors.tertiary,
    backgroundColor: theme.colors.gray,
  },
  lineTop: {
    position: 'absolute',
    top: 0,
    height: '50%',
    width: 2,
    backgroundColor: theme.colors.tertiary,
    opacity: 0.5,
  },
  lineBottom: {
    position: 'absolute',
    bottom: 0,
    height: '50%',
    width: 2,
    backgroundColor: theme.colors.tertiary,
    opacity: 0.5,
  },
}));
