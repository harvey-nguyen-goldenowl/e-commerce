import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppNavigation from '@Navigation/AppNavigation';

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <AppNavigation />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
