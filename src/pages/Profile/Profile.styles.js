import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const scale = PixelRatio.get();

// Figma tasarımına uygun renk paleti
const PRIMARY_BLUE_DARK = '#001F30';
const PRIMARY_BLUE_MEDIUM = '#002D46';
const PRIMARY_BLUE_LIGHT = '#003C5D';
const PRIMARY_BLUE = '#004B73';
const PRIMARY_BLUE_BRIGHT = '#01649A';
const CARD_BACKGROUND = '#F5F5F5';
const CARD_BORDER = '#E5E5E5';
const BUTTON_COLOR = '#183B4E'; // Figma'daki buton rengi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },

  // --- Header Stilleri ---
  headerContainer: {
    position: 'relative',
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    opacity: 0.1, // Pattern'i açık yapmak için
  },
  patternImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  profileContent: {
    alignItems: 'center',
    paddingTop: 20,
    zIndex: 5,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: PRIMARY_BLUE_DARK,
    backgroundColor: '#FFFFFF', // Beyaz arka plan
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 5,
    borderWidth: 2,
    borderColor: '#001F30',
  },
  editIcon: {
    fontSize: 14,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_BLUE_DARK,
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#666666',
  },

  // --- Form Stilleri ---
  formContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    borderRadius: 15,
    paddingVertical: 25,
    elevation: 2,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_BLUE_DARK,
    marginBottom: 8,
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: PRIMARY_BLUE_DARK,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    elevation: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    padding: 5,
  },

  // --- Buton Stilleri (Figma'ya uygun) ---
  editButton: {
    backgroundColor: BUTTON_COLOR, // Figma'daki koyu mavi/yeşil ton
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: width - 40, // Ekran genişliğine göre responsive
    alignSelf: 'center', // Yatayda ortalamak için
  },
  editButtonText: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // --- Android Material Design Ripple Effect ---
  touchableRipple: {
    borderless: false,
    color: 'rgba(255, 255, 255, 0.32)',
  },
});

export default styles;
