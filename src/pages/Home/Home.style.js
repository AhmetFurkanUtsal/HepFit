import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Renkler .cursorrules dosyasından alındı
const PRIMARY_COLOR_DARK = '#001F30';
const PRIMARY_COLOR_MEDIUM = '#002D46';
const PRIMARY_COLOR_LIGHT = '#003C5D';
const PRIMARY_COLOR_STANDARD = '#004B73';
const PRIMARY_COLOR_BRIGHT = '#01649A';
const SURFACE_COLOR = '#FFFFFF';
const BACKGROUND_COLOR = '#F5F5F5'; // Ana arka plan beyaz ton

export const styles = StyleSheet.create({
  // Ana Container
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  // Header
  header: {
    backgroundColor: PRIMARY_COLOR_MEDIUM,
    paddingTop: 50, // Status bar için boşluk
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: SURFACE_COLOR,
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
  },
  // ScrollView
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 100, // Bottom nav bar için boşluk
  },
  // Etkinlik Kartı
  eventCard: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  eventCardImage: {
    width: '100%',
    height: 150,
  },
  cardImageContainer: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#A9B4C2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardImageText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
  },
  cardContent: {
    flex: 1,
    padding: 0,
  },
  // Farklı renklerde kartlar için
  cardColor1: {backgroundColor: PRIMARY_COLOR_BRIGHT},
  cardColor2: {backgroundColor: PRIMARY_COLOR_STANDARD},
  cardColor3: {backgroundColor: PRIMARY_COLOR_LIGHT},
  cardColor4: {backgroundColor: PRIMARY_COLOR_MEDIUM},
  cardColor5: {backgroundColor: PRIMARY_COLOR_DARK},

  cardTitle: {
    color: SURFACE_COLOR,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    marginBottom: 8,
  },
  cardDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cardDetailText: {
    color: SURFACE_COLOR,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    marginLeft: 8,
  },
  // Bottom Navigation Bar
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: PRIMARY_COLOR_MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 10,
    paddingBottom: 15,
    elevation: 10,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navButtonActive: {},
  navButtonPlus: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: -5}],
    elevation: 5,
    borderWidth: 3,
    borderColor: BACKGROUND_COLOR,
  },
});
