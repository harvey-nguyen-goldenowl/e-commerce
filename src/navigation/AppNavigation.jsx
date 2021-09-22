import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BagScreen from '@Screen/BagScreen';
import FavoriteScreen from '@Screen/FavoriteScreen';
import ProfileScreen from '@Screen/ProfileScreen';
import ShopScreen from '@Screen/ShopScreen';
import HomeScreen from '@Screen/HomeScreen';
import { Colors } from '@Style';

const Tab = createBottomTabNavigator();

const options = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = 'home';
      switch (route.name) {
        case 'home':
          iconName = focused ? 'home' : 'home-outline';
          break;
        case 'shop':
          iconName = focused ? 'cart' : 'cart-outline';
          break;
        case 'bag':
          iconName = focused ? 'shopping' : 'shopping-outline';
          break;
        case 'favorite':
          iconName = focused ? 'heart' : 'heart-outline';
          break;
        case 'profile':
          iconName = focused ? 'account' : 'account-outline';
          break;
        default:
      }

      // You can return any component that you like here!
      return <Icon name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: Colors.PRIMARY,
    tabBarInactiveTintColor: Colors.GRAY,
  };
};

const AppNavigation = () => (
  <Tab.Navigator screenOptions={options}>
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="shop" component={ShopScreen} />
    <Tab.Screen name="bag" component={BagScreen} />
    <Tab.Screen name="favorite" component={FavoriteScreen} />
    <Tab.Screen name="profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigation;
