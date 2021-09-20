import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Login from '@Screen/Login';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Login />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
