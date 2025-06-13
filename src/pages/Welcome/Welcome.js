import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './Welcome.style';

const welcomeBackground = require('../../assets/images/backgrounds/background.png');
const logo = require('../../assets/images/logos/logo.png');

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      {/* Üst Kısım: Arka Plan Resmi ve Logo */}
      <View style={styles.topContainer}>
        <ImageBackground
          source={welcomeBackground}
          style={styles.backgroundImage}
          resizeMode="cover">
          {/* Logo, arka plan resminin üzerinde */}
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </ImageBackground>
      </View>

      {/* Alt Kısım: İçerik */}
      <View style={styles.bottomContainer}>
        {/* Metinler */}
        <View style={styles.textContainer}>
          <Text style={styles.appName}>HepFit</Text>
          <View style={styles.divider} />
          <Text style={styles.title}>Spor Yolculuğunuz Başlıyor</Text>
          <Text style={styles.subtitle}>
            Hedeflerinize ulaşmak için ihtiyacınız olan her şey burada.
            Antrenman yapın, etkinlikler oluşturun ve maçlara katılın!
          </Text>
        </View>

        {/* Butonlar */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerButtonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
