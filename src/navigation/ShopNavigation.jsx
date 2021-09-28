import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HeaderShopNavigation from '@Molecule/HeaderShopNavigation';
import CategoriesScreen from '@Screen/CategoriesScreen';
import CatalogScreen from '@Screen/CatalogScreen';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => (
  <Stack.Navigator
    initialRouteName="catalog"
    screenOptions={{
      headerTitleAlign: 'center',
      header: (props) => <HeaderShopNavigation {...props} />,
    }}
  >
    <Stack.Screen name="categories" component={CategoriesScreen} options={{ headerShown: true, title: 'Categories' }} />
    <Stack.Screen name="catalog" component={CatalogScreen} options={{ headerShown: true, title: 'Catalog' }} />
  </Stack.Navigator>
);

export default ShopNavigation;
