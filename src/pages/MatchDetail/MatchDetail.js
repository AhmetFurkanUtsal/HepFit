import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './MatchDetail.style';
import CustomAlert from '../../Components/CustomAlert';

// --- Alt Bileşenler (Sub-components) ---
const MatchHeader = ({navigation, matchData}) => (
  <View style={styles.header}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={24} color="#FFFFFF" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Müsabaka Detayı</Text>
  </View>
);

const MatchMainCard = ({matchData}) => (
  <View style={styles.matchCard}>
    <Text style={styles.matchTitle}>{matchData.title}</Text>
    <View style={styles.matchImageContainer}>
      <Text style={styles.matchImageText}>120x120</Text>
    </View>
  </View>
);

const MatchDetailsSection = ({matchData}) => (
  <View style={styles.detailSection}>
    <Text style={styles.sectionTitle}>Müsabaka Bilgileri</Text>

    <View style={styles.detailRow}>
      <Icon name="calendar" size={20} color="#002D46" />
      <Text style={styles.detailLabel}>Tarih:</Text>
      <Text style={styles.detailValue}>{matchData.date}</Text>
    </View>

    <View style={styles.detailRow}>
      <Icon name="clock-outline" size={20} color="#002D46" />
      <Text style={styles.detailLabel}>Saat:</Text>
      <Text style={styles.detailValue}>{matchData.time}</Text>
    </View>

    <View style={styles.detailRow}>
      <Icon name="map-marker" size={20} color="#002D46" />
      <Text style={styles.detailLabel}>Yer:</Text>
      <Text style={styles.detailValue}>{matchData.location}</Text>
    </View>

    <View style={styles.detailRow}>
      <Icon name="timer-outline" size={20} color="#002D46" />
      <Text style={styles.detailLabel}>Süre:</Text>
      <Text style={styles.detailValue}>{matchData.duration}</Text>
    </View>

    <View style={styles.detailRow}>
      <Icon name="account-group" size={20} color="#002D46" />
      <Text style={styles.detailLabel}>Katılımcı:</Text>
      <Text style={styles.detailValue}>{matchData.participants}</Text>
    </View>
  </View>
);

const MatchDescriptionSection = ({matchData}) => (
  <View style={styles.detailSection}>
    <Text style={styles.sectionTitle}>Açıklama</Text>
    <Text style={styles.descriptionText}>{matchData.description}</Text>
  </View>
);

const PositionCard = ({position, isSelected, onSelect}) => {
  const isAvailable = position.currentPlayers < position.maxPlayers;

  return (
    <TouchableOpacity
      style={[
        styles.positionCard,
        isSelected && styles.positionCardSelected,
        !isAvailable && styles.positionCardDisabled,
      ]}
      onPress={() => isAvailable && onSelect(position.id)}
      disabled={!isAvailable}>
      <View style={styles.positionIcon}>
        <Icon name={position.icon} size={28} color="#001F30" />
      </View>
      <View style={styles.positionInfo}>
        <Text style={styles.positionName}>{position.name}</Text>
        <Text
          style={[
            styles.positionQuota,
            !isAvailable && styles.positionQuotaFull,
          ]}>
          {position.currentPlayers}/{position.maxPlayers} Kişi
        </Text>
      </View>
      {isSelected && <Icon name="check-circle" size={24} color="#01649A" />}
      {!isAvailable && <Icon name="close-circle" size={24} color="#FF6B6B" />}
    </TouchableOpacity>
  );
};

const PositionSelectionSection = ({
  positions,
  selectedPosition,
  onSelectPosition,
}) => (
  <View style={styles.detailSection}>
    <Text style={styles.sectionTitle}>Pozisyon Seçiniz</Text>
    <Text style={styles.positionHint}>
      Müsabakaya katılmak için oynamak istediğiniz pozisyonu seçiniz
    </Text>
    {positions.map(position => (
      <PositionCard
        key={position.id}
        position={position}
        isSelected={selectedPosition === position.id}
        onSelect={onSelectPosition}
      />
    ))}
  </View>
);

const JoinButton = ({onPress, selectedPosition}) => (
  <TouchableOpacity
    style={[styles.joinButton, !selectedPosition && styles.joinButtonDisabled]}
    onPress={onPress}
    disabled={!selectedPosition}>
    <Text style={styles.joinButtonText}>
      {selectedPosition ? 'Müsabakaya Katıl' : 'Pozisyon Seçiniz'}
    </Text>
  </TouchableOpacity>
);

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const MatchDetail = ({navigation, route}) => {
  // Route'dan gelen müsabaka ID'si (şimdilik sabit veri kullanıyoruz)
  const matchId = route?.params?.matchId || '1';

  // Seçilen pozisyon state'i
  const [selectedPosition, setSelectedPosition] = React.useState(null);

  // Custom Alert state'leri
  const [alertVisible, setAlertVisible] = React.useState(false);
  const [alertConfig, setAlertConfig] = React.useState({});

  // Pozisyon verileri
  const positions = [
    {
      id: 'goalkeeper',
      name: 'Kaleci',
      icon: 'hand-back-right',
      maxPlayers: 2,
      currentPlayers: 1,
      color: '#FF6B6B',
    },
    {
      id: 'defense',
      name: 'Defans',
      icon: 'shield-account',
      maxPlayers: 8,
      currentPlayers: 5,
      color: '#4ECDC4',
    },
    {
      id: 'midfield',
      name: 'Ortasaha',
      icon: 'run-fast',
      maxPlayers: 6,
      currentPlayers: 4,
      color: '#45B7D1',
    },
    {
      id: 'forward',
      name: 'Forvet',
      icon: 'soccer',
      maxPlayers: 6,
      currentPlayers: 2,
      color: '#FFA726',
    },
  ];

  // Örnek müsabaka verisi
  const matchData = {
    id: matchId,
    title: 'Futbol Müsabakası',
    date: '15 Mayıs 2025',
    time: '10:00',
    location: 'Hacettepe Üniversitesi Spor Sahası',
    duration: '2 Saat',
    participants: '12/22 Kişi',
    description:
      'Hacettepe Üniversitesi spor sahalarında düzenlenecek olan futbol müsabakamıza tüm öğrenciler davetlidir. Müsabaka 2 saat sürecek olup, 22 kişilik kontenjan bulunmaktadır. Katılım için kayıt yaptırmanız gerekmektedir.',
  };

  // Pozisyon seçme fonksiyonu
  const handleSelectPosition = positionId => {
    setSelectedPosition(positionId);
  };

  // Alert gösterme fonksiyonu
  const showAlert = config => {
    setAlertConfig(config);
    setAlertVisible(true);
  };

  // Alert kapatma fonksiyonu
  const hideAlert = () => {
    setAlertVisible(false);
    setAlertConfig({});
  };

  // Katılım butonu fonksiyonu
  const handleJoinMatch = () => {
    if (!selectedPosition) {
      showAlert({
        type: 'warning',
        title: 'Uyarı',
        message: 'Lütfen bir pozisyon seçiniz!',
        buttons: [
          {
            title: 'Tamam',
            onPress: hideAlert,
          },
        ],
      });
      return;
    }

    const selectedPos = positions.find(p => p.id === selectedPosition);

    showAlert({
      type: 'info',
      title: 'Müsabakaya Katıl',
      message: `${selectedPos.name} pozisyonunda bu müsabakaya katılmak istediğinizden emin misiniz?`,
      buttons: [
        {
          title: 'Katıl',
          type: 'primary',
          onPress: () => {
            hideAlert();
            // Başarı mesajı göster
            setTimeout(() => {
              showAlert({
                type: 'success',
                title: 'Maç Katıldın!',
                message: `${selectedPos.name} pozisyonunda müsabakaya başarıyla katıldınız!`,
                buttons: [
                  {
                    title: 'Ana Sayfaya Dön',
                    onPress: () => {
                      hideAlert();
                      // Ana sayfaya dönmek için önce Main tab navigator'a, sonra Home tab'ına git
                      navigation.reset({
                        index: 0,
                        routes: [
                          {
                            name: 'Main',
                            state: {
                              routes: [{name: 'Home'}],
                              index: 0,
                            },
                          },
                        ],
                      });
                    },
                  },
                ],
              });
            }, 300);
          },
        },
        {
          title: 'İptal',
          type: 'secondary',
          onPress: hideAlert,
        },
      ],
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <StatusBar barStyle="light-content" backgroundColor="#002D46" />

      <MatchHeader navigation={navigation} matchData={matchData} />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <MatchMainCard matchData={matchData} />
        <MatchDetailsSection matchData={matchData} />
        <PositionSelectionSection
          positions={positions}
          selectedPosition={selectedPosition}
          onSelectPosition={handleSelectPosition}
        />
        <MatchDescriptionSection matchData={matchData} />
        <JoinButton
          onPress={handleJoinMatch}
          selectedPosition={selectedPosition}
        />
      </ScrollView>

      <CustomAlert
        visible={alertVisible}
        title={alertConfig.title}
        message={alertConfig.message}
        type={alertConfig.type}
        buttons={alertConfig.buttons}
        onDismiss={hideAlert}
      />
    </SafeAreaView>
  );
};

export default MatchDetail;
