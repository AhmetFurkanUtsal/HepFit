import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Renkler .cursorrules dosyasından alındı
const PRIMARY_COLOR_DARK = '#001F30';
const PRIMARY_COLOR_MEDIUM = '#002D46';
const PRIMARY_COLOR_BRIGHT = '#01649A';
const SURFACE_COLOR = '#FFFFFF';
const BACKGROUND_COLOR = '#F5F5F5';

export const styles = StyleSheet.create({
  // Overlay (Arka plan karartma)
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  // Ana Alert Kartı
  alertCard: {
    backgroundColor: SURFACE_COLOR,
    borderRadius: 20,
    padding: 30,
    marginHorizontal: 30,
    width: width - 60,
    maxWidth: 350,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  // Başarı İkonu Container
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  // Başlık
  alertTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR_DARK,
    textAlign: 'center',
    marginBottom: 15,
  },
  // Mesaj
  alertMessage: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: PRIMARY_COLOR_MEDIUM,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 25,
  },
  // Butonlar Container
  buttonsContainer: {
    width: '100%',
    gap: 12,
  },
  // Ana Buton (Birincil)
  primaryButton: {
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    elevation: 3,
  },
  primaryButtonText: {
    color: SURFACE_COLOR,
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  // İkincil Buton
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: PRIMARY_COLOR_BRIGHT,
  },
  secondaryButtonText: {
    color: PRIMARY_COLOR_BRIGHT,
    fontSize: 16,
    fontFamily: 'Lato-Medium',
  },
  // Tek Buton için
  singleButton: {
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    elevation: 3,
    width: '100%',
  },
});
