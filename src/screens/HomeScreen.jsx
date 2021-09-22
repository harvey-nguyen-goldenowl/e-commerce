import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
