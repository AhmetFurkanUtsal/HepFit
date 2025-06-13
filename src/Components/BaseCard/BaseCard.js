import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const BaseCard = ({children, style, ...props}) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F9FA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: height * 0.65,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    fontFamily: 'Lato-Regular',
  },
});

export default BaseCard;
