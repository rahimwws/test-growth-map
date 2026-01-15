import Svg, { Path, SvgProps } from 'react-native-svg';
import { useUnistyles } from 'react-native-unistyles';

export const ArrowRight = (props: SvgProps) => {
  const { theme } = useUnistyles();
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.color || theme.colors.typography}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={props.strokeWidth || 1.5}
        d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
      />
    </Svg>
  );
};
