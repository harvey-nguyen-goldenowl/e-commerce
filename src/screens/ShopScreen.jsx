import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ShopScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Shop</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShopScreen;
