import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  buttonWrapper: {
    position: 'relative',
  },
  container: {
    backgroundColor: theme.colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    position: 'relative',
    zIndex: 3,
  },
  shadowBottom: {
    position: 'absolute',
    top: 8,
    left: 0.5,
    right: 0.5,
    bottom: -4,
    backgroundColor: theme.colors.buttonShadow,
    borderRadius: 10,
    zIndex: 1,
  },
  shadowMiddle: {
    position: 'absolute',
    top: 4,
    left: 0.5,
    right: 0.5,
    bottom: -4,
    backgroundColor: theme.colors.buttonShadow,
    borderRadius: 10,
    opacity: 0.5,
    zIndex: 2,
  },
}));
