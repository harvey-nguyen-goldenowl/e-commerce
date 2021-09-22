import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BagScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Bag</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BagScreen;
