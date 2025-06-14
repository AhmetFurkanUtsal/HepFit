import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Selection.style';
import {Images} from '../../assets/images'; // Merkezi resim import'u

// Ekran boyutlarına göre kart genişliğini ve kenar boşluğunu hesapla
const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const HORIZONTAL_MARGIN = 10;
const HORIZONTAL_PADDING = (width - CARD_WIDTH) / 2 - HORIZONTAL_MARGIN;

// Sadece yer tutucu olarak kullanılacak veri
const DUMMY_DATA = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}];

const Selection = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const navigation = useNavigation();

  // Karta tıklandığında Home sayfasına yönlendir
  const handleCardPress = cardId => {
    setSelectedCardId(cardId);
    navigation.navigate('Main');
  };

  // Her bir kartı render eden fonksiyon
  const renderCard = ({item}) => {
    const isSelected = item.id === selectedCardId;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleCardPress(item.id)}
        style={[styles.card, isSelected && styles.cardActive]}>
        {/* Kart içeriği - Resim ve içerik */}
        <View style={styles.cardContent}>
          <Image
            source={Images.selectionCard}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardOverlay}>
            <Text style={styles.cardTitle}>Spor Alanı {item.id}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Text style={styles.title}>Spor Alanını Seçin</Text>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        // Kartların ortalanması ve kaydırma efekti için
        contentContainerStyle={{
          paddingHorizontal: HORIZONTAL_PADDING,
        }}
        snapToInterval={CARD_WIDTH + HORIZONTAL_MARGIN * 2}
        decelerationRate="fast"
        bounces={false}
      />
      <Text style={styles.instructionText}>Sağa Sola Kaydırınız</Text>
    </SafeAreaView>
  );
};

export default Selection;
