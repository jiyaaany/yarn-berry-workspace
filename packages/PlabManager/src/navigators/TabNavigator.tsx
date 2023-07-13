import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '@screens/HomeScreen';
import MyScreen from '@screens/MyScreen';
import { useTheme } from '@emotion/react';
import { TabParamList } from '../types/navigator';
import LoginScreen from '@screens/LoginScreen';

const Tab = createMaterialBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator activeColor={theme.colors.semantic.primary}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My" component={MyScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
