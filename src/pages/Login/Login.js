import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  BackHandler,
  ImageBackground,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Login.style';

// Varlıklar
const loginBackground = require('../../assets/images/backgrounds/background.png');
const logo = require('../../assets/images/logos/logo.png');

// --- Alt Bileşenler ---

const Header = () => (
  <View style={styles.headerSection}>
    <Image source={logo} style={styles.logo} resizeMode="contain" />
    <Text style={styles.appTitle}>HepFit</Text>
    <Text style={styles.welcomeText}>Merhaba Sporcu!</Text>
    <Text style={styles.subtitleText}>Antrenmanına devam et</Text>
  </View>
);

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  isPasswordVisible,
  setIsPasswordVisible,
  navigation,
}) => (
  <>
    {/* E-Mail Input */}
    <View style={styles.inputSection}>
      <Text style={styles.inputLabel}>E-Mail</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="email-outline"
          size={22}
          color="#6B7280"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="E-posta adresinizi girin..."
          placeholderTextColor="#A1A1AA"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
    </View>

    {/* Şifre Input */}
    <View style={styles.inputSection}>
      <Text style={styles.inputLabel}>Şifre</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="lock-outline"
          size={22}
          color="#6B7280"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Şifrenizi girin..."
          placeholderTextColor="#A1A1AA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIconContainer}>
          <Icon
            name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#6B7280"
          />
        </TouchableOpacity>
      </View>
    </View>

    {/* Şifremi Unuttum */}
    <TouchableOpacity style={styles.forgotPasswordContainer}>
      <Text style={styles.forgotPasswordText}>Şifremi Unuttum?</Text>
    </TouchableOpacity>

    {/* Giriş Butonu */}
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => navigation.navigate('Selection')}>
      <Text style={styles.loginButtonText}>GİRİŞ</Text>
    </TouchableOpacity>
  </>
);

const SocialLogin = ({onSignupPress}) => (
  <>
    <Text style={styles.orText}>veya şununla devam et</Text>
    <View style={styles.socialButtonsContainer}>
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={28} color="#DB4437" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={28} color="#1877F2" />
      </TouchableOpacity>
    </View>
    <View style={styles.signupContainer}>
      <Text style={styles.signupText}>Hesabınız yok mu? </Text>
      <TouchableOpacity onPress={onSignupPress}>
        <Text style={styles.signupLink}>Hemen Katıl</Text>
      </TouchableOpacity>
    </View>
  </>
);

// --- Ana Sayfa Bileşeni ---

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  React.useEffect(() => {
    const backAction = () => true;
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground source={loginBackground} style={styles.backgroundImage}>
        <Header />
        <View style={styles.formSection}>
          <View style={styles.dividerLine} />
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            <View style={styles.formContainer}>
              <Text style={styles.loginTitle}>Giriş Yap</Text>
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isPasswordVisible={isPasswordVisible}
                setIsPasswordVisible={setIsPasswordVisible}
                navigation={navigation}
              />
              <SocialLogin
                onSignupPress={() => navigation.navigate('Register')}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
