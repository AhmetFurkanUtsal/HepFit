import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Map.style';

const {width, height} = Dimensions.get('window');

// Harita arka planı
const mapBackground = require('../../assets/images/backgrounds/harita.jpg');

// --- Alt Bileşenler (Sub-components) ---

// Konum işaretçisi bileşeni
const LocationMarker = ({number, top, left, onPress, isSelected}) => (
  <TouchableOpacity
    style={[
      styles.locationMarker,
      {
        top: top,
        left: left,
      },
    ]}
    onPress={() => onPress(number)}>
    <View
      style={[
        styles.markerCircle,
        isSelected && {backgroundColor: '#01649A', borderColor: '#FFFFFF'},
      ]}>
      <Text style={[styles.markerNumber, isSelected && {color: '#FFFFFF'}]}>
        {number}
      </Text>
    </View>
  </TouchableOpacity>
);

// Alt kısımdaki konum bilgi kartı
const LocationInfoCard = ({
  selectedLocation,
  onSelectLocation,
  locationData,
}) => {
  const currentLocation = selectedLocation
    ? locationData[selectedLocation]
    : locationData[1];

  return (
    <View style={styles.locationCard}>
      {/* Üst çizgi */}
      <View style={styles.cardHandle} />

      {/* Konum ikonu ve bilgiler */}
      <View style={styles.cardContent}>
        <View style={styles.locationIconContainer}>
          <Icon name="soccer" size={24} color="#002D46" />
        </View>

        <View style={styles.locationInfo}>
          <Text style={styles.locationTitle}>{currentLocation.title}</Text>
          <Text style={styles.locationSubtitle}>
            {currentLocation.subtitle}
          </Text>
        </View>

        <View style={styles.markerIndicator}>
          <View style={styles.markerCircleSmall}>
            <Text style={styles.markerNumberSmall}>
              {selectedLocation || 1}
            </Text>
          </View>
        </View>
      </View>

      {/* Adres */}
      <View style={styles.addressContainer}>
        <Icon name="map-marker" size={16} color="#002D46" />
        <Text style={styles.addressText}>{currentLocation.address}</Text>
      </View>

      {/* Konumu Seç butonu */}
      <TouchableOpacity
        style={styles.selectLocationButton}
        onPress={onSelectLocation}>
        <Text style={styles.selectLocationText}>Konumu Seç</Text>
      </TouchableOpacity>
    </View>
  );
};

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const Map = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState(1);

  // Konum bilgilerini tanımla
  const locationData = {
    1: {
      title: 'Eğitim B Açık Futbol Sahası',
      subtitle: 'Eğitim B Futbol Sahası',
      address: 'Hacettepe, Beytepe Kampüsü, Futbol Sahaları',
    },
    2: {
      title: 'Spor Bilimleri Futbol Sahası',
      subtitle: 'Spor Bilimleri Sahası',
      address: 'Hacettepe, Beytepe Kampüsü, Spor Bilimleri',
    },
  };

  // Konum işaretçisi tıklama fonksiyonu
  const handleMarkerPress = markerNumber => {
    setSelectedLocation(markerNumber);
  };

  // Konumu seç butonu fonksiyonu
  const handleSelectLocation = () => {
    // Seçilen konumu geri döndür ve sayfayı kapat
    navigation.navigate('CreateMatch', {
      selectedLocation: locationData[selectedLocation],
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ImageBackground
        source={mapBackground}
        style={styles.mapBackground}
        resizeMode="cover">
        {/* Konum işaretçileri */}
        <LocationMarker
          number={1}
          top={height * 0.35}
          left={width * 0.25}
          onPress={handleMarkerPress}
          isSelected={selectedLocation === 1}
        />

        <LocationMarker
          number={2}
          top={height * 0.28}
          left={width * 0.5}
          onPress={handleMarkerPress}
          isSelected={selectedLocation === 2}
        />

        {/* Alt kısımdaki konum bilgi kartı */}
        <LocationInfoCard
          selectedLocation={selectedLocation}
          onSelectLocation={handleSelectLocation}
          locationData={locationData}
        />
      </ImageBackground>
    </View>
  );
};

export default Map;
