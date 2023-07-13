/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from './navigators/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { NativeBaseProvider } from 'native-base';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
