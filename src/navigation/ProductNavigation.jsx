import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailProductScreen from '@Screen/DetailProductScreen';

const Stack = createNativeStackNavigator();

const ProductNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="detail" component={DetailProductScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
);

export default ProductNavigation;
