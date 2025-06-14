import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Renkler .cursorrules dosyasından alındı
const PRIMARY_COLOR_DARK = '#001F30';
const PRIMARY_COLOR_MEDIUM = '#002D46';
const PRIMARY_COLOR_LIGHT = '#003C5D';
const PRIMARY_COLOR_STANDARD = '#004B73';
const PRIMARY_COLOR_BRIGHT = '#01649A';
const SURFACE_COLOR = '#FFFFFF';
const BACKGROUND_COLOR = '#F5F5F5';
const CARD_BACKGROUND = '#F5F5F5';
const CARD_BORDER = '#E5E5E5';

const styles = StyleSheet.create({
  // Ana Container
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  // Harita arka planı
  mapBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  // Konum işaretçileri
  locationMarker: {
    position: 'absolute',
    zIndex: 10,
  },

  markerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: SURFACE_COLOR,
    borderWidth: 3,
    borderColor: PRIMARY_COLOR_MEDIUM,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  markerNumber: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR_MEDIUM,
  },

  // Alt kısımdaki konum bilgi kartı
  locationCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: SURFACE_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  // Kart üstündeki çizgi
  cardHandle: {
    width: 48,
    height: 4,
    backgroundColor: CARD_BORDER,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },

  // Kart içeriği
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  locationIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  locationInfo: {
    flex: 1,
  },

  locationTitle: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR_DARK,
    marginBottom: 4,
  },

  locationSubtitle: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: PRIMARY_COLOR_MEDIUM,
  },

  markerIndicator: {
    marginLeft: 10,
  },

  markerCircleSmall: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: SURFACE_COLOR,
    borderWidth: 2,
    borderColor: PRIMARY_COLOR_MEDIUM,
    justifyContent: 'center',
    alignItems: 'center',
  },

  markerNumberSmall: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR_MEDIUM,
  },

  // Adres container
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft: 8,
  },

  addressText: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: PRIMARY_COLOR_MEDIUM,
    marginLeft: 8,
    flex: 1,
  },

  // Konumu Seç butonu
  selectLocationButton: {
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    elevation: 3,
  },

  selectLocationText: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: SURFACE_COLOR,
  },
});

export default styles;
