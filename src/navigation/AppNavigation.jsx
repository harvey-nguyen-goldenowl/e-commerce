import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BagScreen from '@Screen/BagScreen';
import FavoriteScreen from '@Screen/FavoriteScreen';
import HomeScreen from '@Screen/HomeScreen';
import ProfileScreen from '@Screen/ProfileScreen';
import ShopScreen from '@Screen/ShopScreen';
import { FONT_SIZE_12, GRAY, PRIMARY, WHITE } from '@Style';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => {
  return {
    headerShown: false,
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

      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Icon name={iconName} size={size} color={color} />
          <Text style={{ fontSize: 10, lineHeight: 10, color }}>{route.name}</Text>
        </View>
      );
    },
    tabBarActiveTintColor: PRIMARY,
    tabBarInactiveTintColor: GRAY,
    tabBarStyle: {
      height: 83,
      backgroundColor: WHITE,
      borderTopLeftRadius: FONT_SIZE_12,
      borderTopRightRadius: FONT_SIZE_12,
    },
    tabBarShowLabel: false,
  };
};

const AppNavigation = () => (
  <Tab.Navigator screenOptions={screenOptions} initialRouteName="home">
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="shop" component={ShopScreen} />
    <Tab.Screen name="bag" component={BagScreen} />
    <Tab.Screen name="favorite" component={FavoriteScreen} />
    <Tab.Screen name="profile" component={ProfileScreen} />
    {/* <Tab.Screen name="detail" component={DetailProductScreen} /> */}
  </Tab.Navigator>
);

export default AppNavigation;
