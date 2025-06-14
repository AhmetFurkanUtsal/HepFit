import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomAlert from '../../Components/CustomAlert';
import styles from './Profile.styles';

// --- Alt Bileşenler (Sub-components) ---

const ProfileHeader = ({
  name,
  username,
  profileImage,
  onEditPress,
  onBackPress,
}) => (
  <View style={styles.headerContainer}>
    {/* Arka plan görüntüsü */}
    <View style={styles.headerBackground}>
      <Image
        source={require('../../assets/images/backgrounds/background.png')}
        style={styles.patternImage}
        resizeMode="cover"
      />
    </View>

    {/* Geri butonu */}
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Icon name="arrow-left" size={24} color="#FFFFFF" />
    </TouchableOpacity>

    {/* Profil içeriği */}
    <View style={styles.profileContent}>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <TouchableOpacity
          style={styles.editIconContainer}
          onPress={onEditPress}>
          <Text style={styles.editIcon}>✏️</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>@{username}</Text>
    </View>
  </View>
);

const ProfileInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  showEye = false,
  onEyePress,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
      />
      {showEye && (
        <TouchableOpacity style={styles.eyeIcon} onPress={onEyePress}>
          <Icon
            name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
            size={22}
            color="#6B7280"
          />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const SaveButton = ({onPress}) => (
  <TouchableOpacity
    style={styles.editButton}
    activeOpacity={0.8}
    onPress={onPress}>
    <Text style={styles.editButtonText}>Profili Kaydet</Text>
  </TouchableOpacity>
);

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const Profile = () => {
  const navigation = useNavigation();

  // Form state'leri
  const [formData, setFormData] = useState({
    name: 'Ahmet Mehmet',
    email: 'ahmetmehmet@gmail.com',
    username: 'ahmetmehmet',
    password: '••••••••••',
    phone: '+90 * 5123456',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  // Form değişiklik handler'ı
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // Geri butonu
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Profil fotoğrafı düzenleme
  const handleEditProfileImage = () => {
    // Galeri veya kamera seçim modal'ı açılabilir
    console.log('Profil fotoğrafı düzenle');
  };

  // Şifre görünürlük toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Profili kaydet butonu
  const handleSaveProfile = () => {
    console.log('Profil kaydedildi:', formData);
    // API çağrısı veya profil güncelleme işlemi
    setAlertVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#001F30" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        automaticallyAdjustKeyboardInsets={true}
        automaticallyAdjustContentInsets={false}>
        {/* Profil Header */}
        <ProfileHeader
          name={formData.name}
          username={formData.username}
          profileImage={require('../../assets/images/icons/image.png')} // Placeholder
          onEditPress={handleEditProfileImage}
          onBackPress={handleBackPress}
        />

        {/* Form Alanları */}
        <View style={styles.formContainer}>
          <ProfileInput
            label="İsim"
            value={formData.name}
            onChangeText={value => handleInputChange('name', value)}
          />

          <ProfileInput
            label="E-posta Adresi"
            value={formData.email}
            onChangeText={value => handleInputChange('email', value)}
          />

          <ProfileInput
            label="Kullanıcı Adı"
            value={formData.username}
            onChangeText={value => handleInputChange('username', value)}
          />

          <ProfileInput
            label="Şifre"
            value={showPassword ? 'gerceksifre123' : formData.password}
            onChangeText={value => handleInputChange('password', value)}
            secureTextEntry={!showPassword}
            showEye={true}
            onEyePress={togglePasswordVisibility}
          />

          <ProfileInput
            label="Telefon Numarası"
            value={formData.phone}
            onChangeText={value => handleInputChange('phone', value)}
          />
        </View>

        {/* Düzenle Butonu */}
        <View style={{paddingBottom: 50}}>
          <SaveButton onPress={handleSaveProfile} />
        </View>
      </ScrollView>

      {/* Başarılı Bildirim Alert'i */}
      <CustomAlert
        visible={alertVisible}
        title="Başarılı"
        message="Profil bilgileriniz başarıyla güncellendi."
        type="success"
        buttons={[
          {
            title: 'Tamam',
            onPress: () => setAlertVisible(false),
          },
        ]}
        onDismiss={() => setAlertVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Profile;
