import React from 'react';
import {View, Text} from 'react-native';

const PlaceholderScreen = ({route}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 24}}>{route.name} Sayfası</Text>
  </View>
);

export const CalendarScreen = props => <PlaceholderScreen {...props} />;
export const AddScreen = props => <PlaceholderScreen {...props} />;
export const TournamentsScreen = props => <PlaceholderScreen {...props} />;
export const ProfileScreen = props => <PlaceholderScreen {...props} />;
