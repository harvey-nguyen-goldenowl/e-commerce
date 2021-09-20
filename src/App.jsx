import React from 'react';
import {StyleSheet, View} from 'react-native';

import HelloWorld from '@Component/HelloWorld';

const App = () => (
  <View style={styles.container}>
    <HelloWorld />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export default App;
