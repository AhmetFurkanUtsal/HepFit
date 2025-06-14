import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MatchList.styles';

// --- Alt Bileşenler (Sub-components) ---

const MatchHeader = ({onBackPress}) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Icon name="arrow-left" size={24} color="#FFFFFF" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Maç Ara</Text>
  </View>
);

const MatchCard = ({match, onJoinPress}) => (
  <View style={styles.matchCard}>
    <View style={styles.matchHeader}>
      <Text style={styles.matchLevel}>{match.level}</Text>
      <View style={styles.levelBadge}>
        <Text style={styles.levelBadgeText}>Bugün</Text>
      </View>
    </View>

    <View style={styles.matchInfo}>
      <Icon
        name="calendar-outline"
        size={20}
        color="#183B4E"
        style={styles.matchInfoIcon}
      />
      <Text style={styles.matchInfoText}>{match.date}</Text>
    </View>

    <View style={styles.matchInfo}>
      <Icon
        name="clock-outline"
        size={20}
        color="#183B4E"
        style={styles.matchInfoIcon}
      />
      <Text style={styles.matchInfoText}>{match.time}</Text>
    </View>

    <View style={styles.matchInfo}>
      <Icon
        name="map-marker-outline"
        size={20}
        color="#183B4E"
        style={styles.matchInfoIcon}
      />
      <Text style={styles.matchInfoText}>{match.location}</Text>
    </View>

    <TouchableOpacity
      style={[
        styles.matchButton,
        match.isFull ? styles.fullButton : styles.joinButton,
      ]}
      onPress={() => onJoinPress(match)}
      disabled={match.isFull}>
      <Text
        style={[match.isFull ? styles.fullButtonText : styles.joinButtonText]}>
        {match.isFull ? 'Takımlar Doldu!' : 'Maça Katıl'}
      </Text>
    </TouchableOpacity>
  </View>
);

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const MatchList = () => {
  const navigation = useNavigation();

  // Android geri tuşu işlemi
  React.useEffect(() => {
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

  // Maça katıl butonu
  const handleJoinMatch = match => {
    if (!match.isFull) {
      // Maç detay sayfasına git veya katılım işlemi yap
      navigation.navigate('MatchDetail', {matchId: match.id});
    }
  };

  // Örnek maç verileri (Figma tasarımına göre)
  const matches = [
    {
      id: 1,
      level: 'Başlangıç Seviye',
      date: '09/05/2025',
      time: '16:00 - 17:30',
      location: 'Eğitim B Açık Futbol Sahası',
      isFull: false,
    },
    {
      id: 2,
      level: 'Başlangıç Seviye',
      date: '09/05/2025',
      time: '16:00 - 17:30',
      location: 'Eğitim B Açık Futbol Sahası',
      isFull: true,
    },
    {
      id: 3,
      level: 'Orta Seviye',
      date: '25/05/2025',
      time: '18:30 - 20:00',
      location: 'Eğitim B Açık Futbol Sahası',
      isFull: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#002D46" />

      <MatchHeader onBackPress={handleBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {matches.map(match => (
          <MatchCard
            key={match.id}
            match={match}
            onJoinPress={handleJoinMatch}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchList;
