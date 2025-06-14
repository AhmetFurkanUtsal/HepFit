import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// --- Renk Sabitleri ---
const PRIMARY_BLUE_DARK = '#001F30';
const PRIMARY_BLUE_MEDIUM = '#002D46';
const PRIMARY_BLUE_LIGHT = '#003C5D';
const PRIMARY_BLUE_BRIGHT = '#01649A';
const SURFACE = '#FFFFFF';
const TEXT_PRIMARY = '#183B4E';
const CARD_BACKGROUND = '#F5F5F5';
const CARD_BORDER = '#E5E5E5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CARD_BACKGROUND,
  },
  header: {
    backgroundColor: PRIMARY_BLUE_MEDIUM,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: SURFACE,
    flex: 1,
    textAlign: 'center',
    marginRight: 40, // Back button genişliği kadar sağdan boşluk
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
  },

  cardsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingBottom: 85, // Tab bar için boşluk
    zIndex: 1,
  },
  optionCard: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0, // Köşeleri keskin
  },
  optionCardTop: {
    backgroundColor: PRIMARY_BLUE_BRIGHT,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  optionCardBottom: {
    backgroundColor: PRIMARY_BLUE_DARK,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  optionTitle: {
    fontSize: 28,
    fontFamily: 'Lato-Bold',
    color: SURFACE,
    textAlign: 'center',
    letterSpacing: 1,
  },
  // Pressed state için ripple effect
  optionCardPressed: {
    opacity: 0.8,
  },
});

export default styles;
