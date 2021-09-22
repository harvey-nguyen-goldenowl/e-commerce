import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FavoriteScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Favorite</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoriteScreen;
