import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './CreateMatch.style';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomAlert from '../../Components/CustomAlert';

// Renkler
const PRIMARY_COLOR_BRIGHT = '#01649A';

// --- Alt Bileşenler (Sub-components) ---

// Sayfa başlığı
const CreateMatchHeader = ({onBackPress}) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Icon name="arrow-left" size={24} color="#002D46" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Maç Oluştur</Text>
  </View>
);

// Genel form input bileşeni
const FormInput = ({label, placeholder, value, onChangeText, iconName}) => (
  <View style={styles.inputSection}>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={styles.inputContainer}>
      {iconName && (
        <Icon
          name={iconName}
          size={22}
          color="#6B7280"
          style={styles.inputIcon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#A1A1AA"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  </View>
);

// Seçenek seçici bileşeni (Oyuncu Sayısı, Seviye)
const OptionSelector = ({label, options, selectedOption, onSelect}) => (
  <View style={styles.inputSection}>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={styles.optionsContainer}>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOption === option && styles.optionButtonSelected,
          ]}
          onPress={() => onSelect(option)}>
          <Text
            style={[
              styles.optionButtonText,
              selectedOption === option && styles.optionButtonTextSelected,
            ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const CreateMatch = ({navigation, route}) => {
  const [matchName, setMatchName] = useState('');
  const [playerCount, setPlayerCount] = useState('5-5');
  const [level, setLevel] = useState('Orta');
  const [location, setLocation] = useState(null);

  // Date-Time Picker State
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // CustomAlert State
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Harita sayfasından dönen konumu almak için
  useEffect(() => {
    if (route.params?.selectedLocation) {
      console.log('Seçilen konum:', route.params.selectedLocation);
      setLocation(route.params.selectedLocation);
    }
  }, [route.params?.selectedLocation]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  // Maç oluşturma fonksiyonu
  const handleCreateMatch = () => {
    // Form kontrolü
    if (!matchName.trim()) {
      setAlertTitle('Hata');
      setAlertMessage('Lütfen bir müsabaka ismi girin.');
      setAlertVisible(true);
      return;
    }

    if (!location) {
      setAlertTitle('Hata');
      setAlertMessage('Lütfen bir konum seçin.');
      setAlertVisible(true);
      return;
    }

    // Başarılı durumda
    setAlertTitle('Başarılı');
    setAlertMessage('Maç başarıyla oluşturuldu!');
    setAlertVisible(true);
  };

  // Alert'i kapatma fonksiyonu
  const handleCloseAlert = () => {
    setAlertVisible(false);

    // Eğer başarılı ise ana sayfaya dön
    if (alertTitle === 'Başarılı') {
      navigation.navigate('Main');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container.backgroundColor}
      />
      <CreateMatchHeader onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Müsabaka İsmi */}
        <FormInput
          label="Müsabaka İsmi"
          placeholder="Örn: Akşam Maçı"
          value={matchName}
          onChangeText={setMatchName}
          iconName="trophy-outline"
        />

        {/* Oyuncu Sayısı */}
        <OptionSelector
          label="Oyuncu Sayısı"
          options={['5-5', '6-6', '7-7', '8-8']}
          selectedOption={playerCount}
          onSelect={setPlayerCount}
        />

        {/* Konum Seçimi */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Konum</Text>
          <TouchableOpacity
            style={[
              styles.inputContainer,
              location ? {borderColor: PRIMARY_COLOR_BRIGHT} : {},
            ]}
            onPress={() =>
              navigation.navigate('Map', {returnTo: 'CreateMatch'})
            }>
            <Icon
              name="map-marker-outline"
              size={22}
              color={location ? PRIMARY_COLOR_BRIGHT : '#6B7280'}
              style={styles.inputIcon}
            />
            <Text
              style={[
                styles.locationText,
                location
                  ? {color: PRIMARY_COLOR_BRIGHT, fontFamily: 'Lato-Bold'}
                  : {},
              ]}>
              {location ? location.title : 'Haritadan Konum Seç'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Seviye */}
        <OptionSelector
          label="Seviye"
          options={['Başlangıç', 'Orta', 'İleri']}
          selectedOption={level}
          onSelect={setLevel}
        />

        {/* Tarih ve Saat Seçimi */}
        <View style={styles.dateTimeContainer}>
          <View style={[styles.inputSection, {flex: 1}]}>
            <Text style={styles.inputLabel}>Tarih</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => setShowDatePicker(true)}>
              <Icon
                name="calendar-month-outline"
                size={22}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <Text style={styles.locationText}>
                {date.toLocaleDateString('tr-TR')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.inputSection, {flex: 1}]}>
            <Text style={styles.inputLabel}>Saat</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => setShowTimePicker(true)}>
              <Icon
                name="clock-outline"
                size={22}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <Text style={styles.locationText}>
                {time.toLocaleTimeString('tr-TR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Maç Oluştur Butonu */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateMatch}>
          <Text style={styles.createButtonText}>Maçı Oluştur</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* DateTime Picker Modals */}
      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={time}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}

      {/* Custom Alert */}
      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        type={alertTitle === 'Başarılı' ? 'success' : 'error'}
        buttons={[
          {
            title: alertTitle === 'Başarılı' ? 'Ana Sayfaya Dön' : 'Tamam',
            onPress: handleCloseAlert,
          },
        ]}
        onDismiss={handleCloseAlert}
      />
    </SafeAreaView>
  );
};

export default CreateMatch;
