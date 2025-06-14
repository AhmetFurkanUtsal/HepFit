import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Sayfalar
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Add from '../pages/Add';
import Map from '../pages/Map';
import Profile from '../pages/Profile';

// Stil
import {styles} from '../pages/Home/Home.style';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -10, // Çok yukarı çıkmasın, sadece 10px
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#01649A', // Primary Blue Bright
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 3,
        borderColor: '#F5F5F5',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 85,
          backgroundColor: '#002D46', // Primary Blue Medium
          borderTopWidth: 0, // Üst border çizgisini kaldır
          elevation: 10,
          paddingBottom: 15,
          paddingTop: 10,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color="#FFFFFF"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'calendar' : 'calendar-outline'}
              size={28}
              color="#FFFFFF"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: () => <Icon name="plus" size={28} color="#FFFFFF" />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'map-marker' : 'map-marker-outline'}
              size={28}
              color="#FFFFFF"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'account-circle' : 'account-circle-outline'}
              size={28}
              color="#FFFFFF"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
