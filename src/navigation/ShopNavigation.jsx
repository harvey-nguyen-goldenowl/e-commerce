import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import CategoriesScreen from '@Screen/CategoriesScreen';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    <Stack.Screen name="categories" component={CategoriesScreen} options={{ headerShown: true, title: 'Categories' }} />
  </Stack.Navigator>
);

export default ShopNavigation;
