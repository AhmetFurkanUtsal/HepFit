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
import {styles} from './Register.style';

const loginBackground = require('../../assets/images/backgrounds/background.png');
const logo = require('../../assets/images/logos/logo.png');

// --- Alt Bileşenler ---

const Header = () => (
  <View style={styles.headerSection}>
    <Image source={logo} style={styles.logo} resizeMode="contain" />
    <Text style={styles.appTitle}>Aramıza Katıl!</Text>
    <Text style={styles.subtitleText}>Kampüs Sporuna Başla</Text>
  </View>
);

const RegisterForm = ({
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  phone,
  setPhone,
}) => (
  <>
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
          placeholder="Şifrenizi oluşturun..."
          placeholderTextColor="#A1A1AA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
    </View>

    <View style={styles.inputSection}>
      <Text style={styles.inputLabel}>Şifre Tekrar</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="lock-check-outline"
          size={22}
          color="#6B7280"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Şifrenizi tekrar girin..."
          placeholderTextColor="#A1A1AA"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry
        />
      </View>
    </View>

    <View style={styles.inputSection}>
      <Text style={styles.inputLabel}>Telefon (İsteğe Bağlı)</Text>
      <View style={styles.inputContainer}>
        <Icon
          name="phone-outline"
          size={22}
          color="#6B7280"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Telefon numaranızı girin..."
          placeholderTextColor="#A1A1AA"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>
    </View>

    <TouchableOpacity style={styles.registerButton}>
      <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
    </TouchableOpacity>
  </>
);

// --- Ana Sayfa Bileşeni ---

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [phone, setPhone] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
    return true; // Android'de geri tuşu olayını burada sonlandırır
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleGoBack,
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
              <Text style={styles.loginTitle}>Kayıt Ol</Text>
              <RegisterForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                passwordConfirm={passwordConfirm}
                setPasswordConfirm={setPasswordConfirm}
                phone={phone}
                setPhone={setPhone}
              />
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Zaten bir hesabın var mı? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.loginLink}>Giriş Yap</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;
