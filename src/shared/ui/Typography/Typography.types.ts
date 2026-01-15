import { TextProps } from 'react-native';
import { lightTheme } from '../../lib/styles/theme';

type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type ThemeColors = keyof typeof lightTheme.colors;

export interface TypographyProps extends Omit<TextProps, 'style'> {
  size?: number;
  weight?: FontWeight;
  color?: ThemeColors;
  style?: TextProps['style'];
}

export const fontWeights: Record<FontWeight, TextProps['style']> = {
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
};
