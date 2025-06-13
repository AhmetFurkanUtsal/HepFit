import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BaseCard from '../../Components/BaseCard';
import {styles} from './Login.style';

function Logo() {
  return (
    <View>
      <Image
        source={require('../../assets/images/logos/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

function Login() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/images/backgrounds/background.png')}
      style={styles.background}
      resizeMode="cover">
      <Logo />
      <BaseCard></BaseCard>
    </ImageBackground>
  );
}

export default Login;
