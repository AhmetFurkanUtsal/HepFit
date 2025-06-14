import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const scale = PixelRatio.get();

// Figma tasarımına uygun renk paleti
const PRIMARY_BLUE_DARK = '#001F30';
const PRIMARY_BLUE_MEDIUM = '#002D46';
const BUTTON_COLOR = '#183B4E';
const WHITE = '#FFFFFF';
const GRAY_TEXT = '#666666';
const GRAY_LIGHT = '#E5E5E5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },

  // --- Header Stilleri ---
  header: {
    backgroundColor: '#002D46',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: WHITE,
  },

  // --- İçerik Stilleri ---
  content: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // --- Maç Kartları ---
  matchCard: {
    backgroundColor: WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BUTTON_COLOR,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  matchLevel: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: BUTTON_COLOR,
  },
  levelBadge: {
    backgroundColor: BUTTON_COLOR,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  levelBadgeText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: WHITE,
  },

  // --- Maç Bilgileri ---
  matchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  matchInfoIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  matchInfoText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: BUTTON_COLOR,
  },
  matchLocation: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: BUTTON_COLOR,
    marginTop: 8,
  },

  // --- Buton Stilleri ---
  matchButton: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  joinButton: {
    backgroundColor: BUTTON_COLOR,
  },
  fullButton: {
    backgroundColor: GRAY_LIGHT,
  },
  joinButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: WHITE,
  },
  fullButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: BUTTON_COLOR,
  },

  // --- Alt Navigasyon ---
  bottomNavigation: {
    backgroundColor: WHITE,
    borderTopWidth: 1,
    borderTopColor: GRAY_LIGHT,
    paddingVertical: 16,
    elevation: 8,
  },
});

export default styles;
