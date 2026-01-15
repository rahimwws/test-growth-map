import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';
import { useUnistyles } from 'react-native-unistyles';

export const SparkleSvg = (props: SvgProps) => {
  const { theme } = useUnistyles();
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={props.fill || theme.colors.typography}
          d="M19.5 13.5a1.48 1.48 0 0 1-.977 1.4l-4.836 1.787-1.78 4.84a1.493 1.493 0 0 1-2.802 0l-1.793-4.84-4.839-1.78a1.492 1.492 0 0 1 0-2.802l4.84-1.793 1.78-4.839a1.492 1.492 0 0 1 2.802 0l1.792 4.84 4.84 1.78A1.48 1.48 0 0 1 19.5 13.5Zm-5.25-9h1.5V6a.75.75 0 1 0 1.5 0V4.5h1.5a.75.75 0 1 0 0-1.5h-1.5V1.5a.75.75 0 1 0-1.5 0V3h-1.5a.75.75 0 1 0 0 1.5Zm8.25 3h-.75v-.75a.75.75 0 1 0-1.5 0v.75h-.75a.75.75 0 1 0 0 1.5h.75v.75a.75.75 0 1 0 1.5 0V9h.75a.75.75 0 1 0 0-1.5Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={props.fill || theme.colors.typography} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
