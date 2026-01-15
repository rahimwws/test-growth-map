import React from 'react';
import { Svg, Path, SvgProps, Defs, G, ClipPath } from 'react-native-svg';
import { useUnistyles } from 'react-native-unistyles';

export const CheckSvg: React.FC<SvgProps> = (props) => {
  const { theme } = useUnistyles();
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a">
        <Path fill={props.fill || theme.colors.typography} d="M6 6h12v12H6z" />
        <Path
          fill={props.stroke || theme.colors.typography}
          d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm4.28 8.03-5.25 5.25a.747.747 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={props.stroke || theme.colors.typography} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
