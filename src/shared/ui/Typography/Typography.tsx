import { Text } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';

import { TypographyProps, fontWeights } from './Typography.types';

export const Typography = ({
  size = 16,
  weight = 'normal',
  color,
  style,
  children,
  ...rest
}: TypographyProps) => {
  const { theme } = useUnistyles();

  const textColor = color ? theme.colors[color] : theme.colors.typography;

  return (
    <Text
      style={[styles.text, { fontSize: size }, fontWeights[weight], { color: textColor }, style]}
      {...rest}>
      {children}
    </Text>
  );
};

export const styles = StyleSheet.create((theme) => ({
  text: {
    color: theme.colors.typography,
  },
}));
