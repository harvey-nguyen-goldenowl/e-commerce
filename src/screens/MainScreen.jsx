import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigation from '@Navigation/AppNavigation';
import ProductNavigation from '@Navigation/ProductNavigation';

const Stack = createNativeStackNavigator();

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main-nav" component={AppNavigation} />
      <Stack.Screen name="product-nav" component={ProductNavigation} />
    </Stack.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
