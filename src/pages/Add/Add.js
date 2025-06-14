import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../../assets/images';
import styles from './Add.style';

const {width, height} = Dimensions.get('window');

// --- Alt Bileşenler (Sub-components) ---
const AddHeader = ({onBackPress}) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Icon name="arrow-left" size={24} color="#FFFFFF" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Sayfam</Text>
  </View>
);

const OptionCard = ({title, isTop, onPress}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <Pressable
      style={[
        styles.optionCard,
        isTop ? styles.optionCardTop : styles.optionCardBottom,
        isPressed && styles.optionCardPressed,
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      android_ripple={{
        color: 'rgba(255, 255, 255, 0.1)',
        borderless: false,
      }}>
      <Text style={styles.optionTitle}>{title}</Text>
    </Pressable>
  );
};

const AddContent = ({navigation}) => {
  const handleMatchSearch = () => {
    // Maç Ara sayfasına git
    navigation.navigate('MatchSearch');
  };

  const handleCreateMatch = () => {
    // Maç Oluştur sayfasına git
    navigation.navigate('CreateMatch');
  };

  return (
    <ImageBackground
      source={Images.loginBackground}
      style={styles.contentContainer}
      resizeMode="cover">
      <View style={styles.cardsContainer}>
        <OptionCard title="Maç Ara" isTop={true} onPress={handleMatchSearch} />
        <OptionCard
          title="Maç Oluştur"
          isTop={false}
          onPress={handleCreateMatch}
        />
      </View>
    </ImageBackground>
  );
};

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const Add = ({navigation}) => {
  // Geri dönme işlemi
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <StatusBar barStyle="light-content" backgroundColor="#002D46" />

      <AddHeader onBackPress={handleBackPress} />
      <AddContent navigation={navigation} />
    </SafeAreaView>
  );
};

export default Add;
