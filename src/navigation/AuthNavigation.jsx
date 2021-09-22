import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ForgotPasswordScreen from '@Screen/ForgotPasswordScreen';
import LoginScreen from '@Screen/LoginScreen';
import MainScreen from '@Screen/MainScreen';
import SignupScreen from '@Screen/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator initialRouteName="signup">
    <Stack.Screen name="signup" component={SignupScreen} />
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="main" component={MainScreen} options={{ headerShown: false }} />
    <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

export default AuthNavigation;
