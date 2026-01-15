import type React from 'react';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { LayoutProps } from './Layout.types';

export const Layout = ({ children, scrollable = false, includeTopInset = true }: LayoutProps) => {
  if (scrollable) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive">
        {children}
      </ScrollView>
    );
  }
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create((theme, rt) => ({
  scrollContent: {
    paddingBottom: 50,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
    paddingTop: rt.insets.top,
  },
}));
