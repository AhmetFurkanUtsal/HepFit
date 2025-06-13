import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {styles} from './Welcome.style';
import {fonts} from '../../assets/fonts/index';
import BaseCard from '../../Components/BaseCard';

const {width, height} = Dimensions.get('window');

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

function Card() {
  const navigation = useNavigation();
  return (
    <BaseCard>
      <View>
        <Text style={styles.textHeader}>HepFit</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textSubtitle}>Spor Yolculuğunuz Başlıyor</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hedeflerinize ulaşmak için ihtiyacınız olan her şey burada. Antrenman
          yapın. Spor etkinlikleri oluşturun. Maçlara katılın!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Giriş Yap"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Kayıt Ol" />
      </View>
    </BaseCard>
  );
}

const Welcome = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/backgrounds/background.png')}
      style={styles.background}
      resizeMode="cover">
      <Logo />
      <Card />
    </ImageBackground>
  );
};

export default Welcome;
