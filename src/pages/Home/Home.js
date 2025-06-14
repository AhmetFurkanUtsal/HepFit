import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Home.style';

// Örnek veri
const EVENTS = [
  {id: '1', style: styles.cardColor1},
  {id: '2', style: styles.cardColor2},
  {id: '3', style: styles.cardColor3},
  {id: '4', style: styles.cardColor4},
  {id: '5', style: styles.cardColor5},
];

// --- Alt Bileşenler ---
const EventCard = ({event, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.eventCard, event.style]}
    onPress={() => onPress(event.id)}>
    {/* Resim Alanı */}
    <View style={styles.cardImageContainer}>
      <Text style={styles.cardImageText}>64x64</Text>
    </View>

    {/* İçerik Alanı */}
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>Futbol Müsabakası</Text>
      <View style={styles.cardDetailsRow}>
        <Text style={styles.cardDetailText}>15 Mayıs 2025, 10:00</Text>
      </View>
      <View style={styles.cardDetailsRow}>
        <Icon name="map-marker-outline" size={16} color="#FFFFFF" />
        <Text style={styles.cardDetailText}>H.Ü</Text>
        <Icon
          name="circle-small"
          size={16}
          color="#FFFFFF"
          style={{marginHorizontal: 5}}
        />
        <Icon name="clock-time-three-outline" size={16} color="#FFFFFF" />
        <Text style={styles.cardDetailText}>2 Saat</Text>
      </View>
    </View>
  </TouchableOpacity>
);

// --- Ana Sayfa Bileşeni ---
const Home = ({navigation}) => {
  // Müsabaka kartına tıklama fonksiyonu
  const handleMatchPress = matchId => {
    navigation.navigate('MatchDetail', {matchId});
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <StatusBar barStyle="light-content" backgroundColor="#002D46" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Anasayfa</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        {EVENTS.map(event => (
          <EventCard key={event.id} event={event} onPress={handleMatchPress} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
