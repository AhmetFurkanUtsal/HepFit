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
import Home from './src/pages/Home';
import MatchDetail from './src/pages/MatchDetail';
import Map from './src/pages/Map';
import CreateMatch from './src/pages/CreateMatch';
import MatchSearch from './src/pages/MatchSearch';
import MatchList from './src/pages/MatchList';
import MainTabNavigator from './src/navigation/MainTabNavigator';

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
          headerStyle: {
            backgroundColor: '#001F30',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: 'Lato-Bold',
          },
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Giriş Yap'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Selection"
          component={Selection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MatchDetail"
          component={MatchDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateMatch"
          component={CreateMatch}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MatchSearch"
          component={MatchSearch}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MatchList"
          component={MatchList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
