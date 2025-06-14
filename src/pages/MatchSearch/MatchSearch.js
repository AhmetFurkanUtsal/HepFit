import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './MatchSearch.styles';

// --- Alt Bileşenler (Sub-components) ---

const MatchHeader = ({onBackPress}) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Icon name="arrow-left" size={24} color="#183B4E" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Maç Ara</Text>
  </View>
);

const MatchDetailsCard = ({
  selectedDate,
  selectedTime,
  selectedLocation,
  onDateSelect,
  onTimeSelect,
  onLocationSelect,
  onDatePickerPress,
  onTimePickerPress,
  onLocationPress,
}) => {
  return (
    <View>
      {/* Konum Seçimi */}
      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Konum</Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={onLocationPress}>
          <Icon
            name="map-marker-outline"
            size={22}
            color={selectedLocation ? '#01649A' : '#6B7280'}
            style={styles.inputIcon}
          />
          <Text
            style={[
              styles.locationText,
              selectedLocation
                ? {color: '#01649A', fontFamily: 'Lato-Bold'}
                : {},
            ]}>
            {selectedLocation ? selectedLocation.title : 'Haritadan Konum Seç'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tarih ve Saat Seçimi */}
      <View style={styles.dateTimeContainer}>
        {/* Tarih */}
        <View style={[styles.inputSection, {flex: 1}]}>
          <Text style={styles.inputLabel}>Tarih</Text>
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={onDatePickerPress}>
            <Icon
              name="calendar-month-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <Text style={styles.locationText}>
              {selectedDate
                ? selectedDate.toLocaleDateString('tr-TR')
                : 'Tarih Seç'}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Saat */}
        <View style={[styles.inputSection, {flex: 1}]}>
          <Text style={styles.inputLabel}>Saat</Text>
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={onTimePickerPress}>
            <Icon
              name="clock-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <Text style={styles.locationText}>
              {selectedTime
                ? selectedTime.toLocaleTimeString('tr-TR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : 'Saat Seç'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PositionCard = ({position, onPress, isSelected}) => (
  <TouchableOpacity
    style={[styles.positionCard, isSelected && styles.selectedPositionCard]}
    onPress={onPress}>
    <Text
      style={[styles.positionName, isSelected && styles.selectedPositionName]}>
      {position}
    </Text>
  </TouchableOpacity>
);

const PositionSelection = ({onPositionSelect, selectedPosition}) => {
  const positions = [
    {id: 1, name: 'Kaleci'},
    {id: 2, name: 'Defans'},
    {id: 3, name: 'Orta Saha'},
    {id: 4, name: 'Forvet'},
  ];

  return (
    <View style={styles.positionSection}>
      <Text style={styles.positionTitle}>Pozisyonunu Seç</Text>
      <View style={styles.positionGrid}>
        {positions.map(position => (
          <PositionCard
            key={position.id}
            position={position.name}
            isSelected={selectedPosition?.id === position.id}
            onPress={() => onPositionSelect(position)}
          />
        ))}
      </View>
    </View>
  );
};

const SearchButton = ({onPress, disabled}) => (
  <View style={styles.joinButtonContainer}>
    <TouchableOpacity
      style={[styles.joinButton, disabled && {opacity: 0.5}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.joinButtonText}>Maç Ara</Text>
    </TouchableOpacity>
  </View>
);

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const MatchSearch = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [location, setLocation] = useState(null);

  // DateTimePicker state'leri
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Haritadan seçilen konumu almak için
  useEffect(() => {
    if (route.params?.selectedLocation) {
      setLocation(route.params.selectedLocation);
    }
  }, [route.params?.selectedLocation]);

  // Android geri tuşu işlemi
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  // Geri butonu
  const handleBackPress = () => {
    navigation.goBack();
  };

  // DateTimePicker fonksiyonları
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  // Pozisyon seçimi
  const handlePositionSelect = position => {
    setSelectedPosition(position);
  };

  // Maç ara butonu
  const handleSearchMatch = () => {
    if (selectedPosition && location && date && time) {
      // Figma'daki maç listesi sayfasına git
      navigation.navigate('MatchList', {
        position: selectedPosition,
        date: date.toLocaleDateString('tr-TR'),
        time: time.toLocaleTimeString('tr-TR'),
        location: location,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#002D46" />

      <MatchHeader onBackPress={handleBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <MatchDetailsCard
          selectedDate={date}
          selectedTime={time}
          selectedLocation={location}
          onDatePickerPress={() => setShowDatePicker(true)}
          onTimePickerPress={() => setShowTimePicker(true)}
          onLocationPress={() =>
            navigation.navigate('Map', {returnTo: 'MatchSearch'})
          }
        />
        <PositionSelection
          onPositionSelect={handlePositionSelect}
          selectedPosition={selectedPosition}
        />
      </ScrollView>

      <SearchButton
        onPress={handleSearchMatch}
        disabled={!selectedPosition || !location || !date || !time}
      />

      {/* DateTimePicker Modals */}
      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={time || new Date()}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}
    </SafeAreaView>
  );
};

export default MatchSearch;
