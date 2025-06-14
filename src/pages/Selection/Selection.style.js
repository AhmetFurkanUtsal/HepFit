import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const PRIMARY_COLOR = '#183B4E';

// Kartların boyutunu ve kenarlardaki boşluğu hesaplayalım
const CARD_WIDTH = width * 0.7;
const CARD_ASPECT_RATIO = 1.2;
const CARD_HEIGHT = CARD_WIDTH * CARD_ASPECT_RATIO;
const HORIZONTAL_PADDING = (width - CARD_WIDTH) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    position: 'absolute',
    top: height * 0.15,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  list: {
    flexGrow: 0, // Listenin tüm alanı kaplamasını engeller
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#F3F4F6',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, // Kartlar arası boşluk
    overflow: 'hidden', // Android için resim taşmalarını önler
    elevation: 3, // Android gölge efekti
  },
  // Bu stil, aktif kartı büyütmek için kullanılabilir (gelecekte)
  cardActive: {
    // transform: [{scale: 1.05}],
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    elevation: 5,
  },
  // Kart içeriği container'ı
  cardContent: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // İç boşluk ekledim
  },
  // Kart resmi stilleri
  cardImage: {
    width: CARD_WIDTH * 0.6, // Kartın %60'ı kadar genişlik
    height: CARD_HEIGHT * 0.5, // Kartın %50'si kadar yükseklik
    borderRadius: 15,
    marginBottom: 15, // Alt boşluk
  },
  // Resim üzerindeki overlay katmanı
  cardOverlay: {
    position: 'absolute',
    bottom: 20, // Kartın alt kısmından 20px yukarıda
    left: 20,
    right: 20,
    backgroundColor: 'rgba(24, 59, 78, 0.9)', // Daha koyu opacity
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  // Overlay içindeki başlık
  cardTitle: {
    fontSize: 16, // Biraz küçülttüm
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cardIcon: {
    width: CARD_WIDTH * 0.4,
    height: CARD_HEIGHT * 0.4,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    color: '#374151',
  },
  selectedIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginVertical: 20,
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
  },
  instructionText: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    position: 'absolute',
    bottom: height * 0.15,
  },
});
