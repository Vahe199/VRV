/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Route from './src/navigation/route';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'#008CC0'}
      />
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </>
  );
}
