import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from '@Navigation/AuthNavigation';

const App = () => (
  <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
