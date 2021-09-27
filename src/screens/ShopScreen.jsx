import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ShopNavigation from '@Navigation/ShopNavigation';

const ShopScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ShopNavigation />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShopScreen;
