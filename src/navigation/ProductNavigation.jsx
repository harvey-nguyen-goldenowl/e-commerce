import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailProductScreen from '@Screen/DetailProductScreen';
import HeaderShopNavigation from '@Molecule/HeaderShopNavigation';

const Stack = createNativeStackNavigator();

const ProductNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <HeaderShopNavigation {...props} />,
    }}
  >
    <Stack.Screen name="detail" component={DetailProductScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
);

export default ProductNavigation;
