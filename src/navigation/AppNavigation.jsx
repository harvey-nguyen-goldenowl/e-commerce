import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';

import BagScreen from '@Screen/BagScreen';
import FavoriteScreen from '@Screen/FavoriteScreen';
import HomeScreen from '@Screen/HomeScreen';
import ProfileScreen from '@Screen/ProfileScreen';
import ShopScreen from '@Screen/ShopScreen';
import { Colors, Font } from '@Style';

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
    tabBarActiveTintColor: Colors.PRIMARY,
    tabBarInactiveTintColor: Colors.GRAY,
    tabBarStyle: {
      height: 83,
      backgroundColor: Colors.WHITE,
      borderTopLeftRadius: Font.FONT_SIZE_12,
      borderTopRightRadius: Font.FONT_SIZE_12,
    },
    tabBarShowLabel: false,
  };
};

const AppNavigation = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="shop" component={ShopScreen} />
    <Tab.Screen name="bag" component={BagScreen} />
    <Tab.Screen name="favorite" component={FavoriteScreen} />
    <Tab.Screen name="profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigation;
