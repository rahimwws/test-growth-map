import { ArrowRight, LockSvg } from '@/shared/assets';
import { SquircleButton, SquircleView } from 'expo-squircle-view';
import { Animated } from 'react-native';
import { useUnistyles, withUnistyles } from 'react-native-unistyles';
import { useButtonPressAnimation } from './useButtonPressAnimation';
import { styles } from './styles';

const UnistylesSquircleButton = withUnistyles(SquircleButton);
const UnistylesSquircleView = withUnistyles(SquircleView);

export const NextButton = ({ action, disabled }: { action: () => void; disabled?: boolean }) => {
  const { handlePressIn, handlePressOut, translateY } = useButtonPressAnimation(6);
  const { theme } = useUnistyles();
  return (
    <Animated.View
      style={[
        styles.buttonWrapper,
        {
          transform: [{ translateY }],
        },
      ]}>
      <UnistylesSquircleView style={styles.shadowBottom} />
      <UnistylesSquircleView style={styles.shadowMiddle} />

      {/* Сама кнопка */}
      <UnistylesSquircleButton
        style={styles.container}
        onPress={action}
        borderRadius={12}
        cornerSmoothing={80}
        preserveSmoothing
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        activeOpacity={0.9}>
        {disabled ? (
          <LockSvg width={30} height={30} stroke={'#657379'} />
        ) : (
          <ArrowRight strokeWidth={3} color={'#657379'} />
        )}
      </UnistylesSquircleButton>
    </Animated.View>
  );
};
