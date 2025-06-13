import React from 'react';
import {View, Text, StatusBar, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './Selection.style';

// Ekran boyutlarına göre kart genişliğini ve kenar boşluğunu hesapla
const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const HORIZONTAL_MARGIN = 10;
const HORIZONTAL_PADDING = (width - CARD_WIDTH) / 2 - HORIZONTAL_MARGIN;

// Sadece yer tutucu olarak kullanılacak veri
const DUMMY_DATA = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}];

const Selection = () => {
  // Her bir boş kartı render eden fonksiyon
  const renderCard = ({item}) => <View style={styles.card} />;

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
