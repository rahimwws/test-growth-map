import { useRef } from 'react';
import { Animated } from 'react-native';

export const useButtonPressAnimation = (pressDistance: number = 6) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, pressDistance],
  });

  return {
    handlePressIn,
    handlePressOut,
    translateY,
  };
};
