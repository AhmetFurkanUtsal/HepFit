/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

import Welcome from './src/pages/Welcome';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Selection from './src/pages/Selection';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#001F30"
        translucent={false}
      />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false, // Tüm sayfalarda başlığı gizle
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Selection" component={Selection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
