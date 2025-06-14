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
const BUTTON_COLOR = '#183B4E';
const WHITE = '#FFFFFF';
const GRAY_TEXT = '#666666';
const GREEN_AVAILABLE = '#445E6C';
const TEXT_COLOR_DARK = '#1F2937';
const BORDER_COLOR = '#E5E7EB';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  // --- Header Stilleri ---
  header: {
    backgroundColor: PRIMARY_BLUE_MEDIUM,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: WHITE,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  backIcon: {
    fontSize: 16,
    color: BUTTON_COLOR,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_BLUE_DARK,
  },

  // --- İçerik Stilleri ---
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  // --- Form Stilleri (CreateMatch'ten alındı) ---
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: TEXT_COLOR_DARK,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: TEXT_COLOR_DARK,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    gap: 15,
  },

  // --- Maç Detayları Kartı ---
  matchCard: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 24,
    marginTop: 20,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  matchTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Regular',
    color: BUTTON_COLOR,
    marginBottom: 20,
  },

  // --- Kart İçi Seçim Bölümleri ---
  cardSection: {
    marginBottom: 20,
  },
  cardSectionTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: BUTTON_COLOR,
    marginBottom: 12,
  },
  cardOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardOptionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardOptionsColumn: {
    gap: 8,
  },
  cardOption: {
    flex: 1,
    minWidth: (width - 72) / 2,
    backgroundColor: WHITE,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PRIMARY_BLUE_MEDIUM,
  },
  cardLocationOption: {
    backgroundColor: WHITE,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PRIMARY_BLUE_MEDIUM,
  },
  selectedCardOption: {
    backgroundColor: BUTTON_COLOR,
    borderColor: BUTTON_COLOR,
  },
  cardOptionText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: BUTTON_COLOR,
    fontWeight: '500',
  },
  selectedCardOptionText: {
    color: WHITE,
  },
  locationIcon: {
    marginRight: 8,
  },

  // --- Pozisyon Seçimi ---
  positionSection: {
    marginTop: 10,
  },
  positionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: BUTTON_COLOR,
    textAlign: 'center',
    marginBottom: 20,
  },
  positionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  positionCard: {
    width: (width - 72) / 2,
    backgroundColor: WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: PRIMARY_BLUE_MEDIUM,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedPositionCard: {
    backgroundColor: BUTTON_COLOR,
    borderColor: BUTTON_COLOR,
    elevation: 4,
    color: WHITE,
  },
  positionName: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: BUTTON_COLOR,
    textAlign: 'center',
  },
  selectedPositionName: {
    color: WHITE,
  },

  // --- Katıl Butonu ---
  joinButtonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#F5F5F5',
  },
  joinButton: {
    backgroundColor: BUTTON_COLOR,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  joinButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: WHITE,
  },

  // --- Alt Navigasyon ---
  bottomNavigation: {
    backgroundColor: WHITE,
    borderTopWidth: 1,
    borderTopColor: CARD_BORDER,
    paddingVertical: 16,
    elevation: 8,
  },
});

export default styles;
