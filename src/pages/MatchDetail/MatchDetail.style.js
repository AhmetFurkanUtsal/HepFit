import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

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
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: SURFACE_COLOR,
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    flex: 1,
  },
  // ScrollView
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 100, // Bottom nav bar için boşluk
  },
  // Müsabaka Kartı
  matchCard: {
    backgroundColor: SURFACE_COLOR,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  matchTitle: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  matchImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 15,
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  matchImageText: {
    color: SURFACE_COLOR,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  // Detay Bilgileri
  detailSection: {
    backgroundColor: SURFACE_COLOR,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  sectionTitle: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    color: PRIMARY_COLOR_MEDIUM,
    fontSize: 14,
    fontFamily: 'Lato-Medium',
    marginLeft: 12,
    flex: 1,
  },
  detailValue: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    flex: 2,
  },
  // Pozisyon Seçimi
  positionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SURFACE_COLOR,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: CARD_BORDER,
    elevation: 2,
  },
  positionCardSelected: {
    borderColor: PRIMARY_COLOR_BRIGHT,
    backgroundColor: '#E3F2FD',
  },
  positionCardDisabled: {
    backgroundColor: '#F5F5F5',
    borderColor: '#CCCCCC',
    opacity: 0.6,
  },
  positionIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  positionInfo: {
    flex: 1,
  },
  positionName: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    marginBottom: 4,
  },
  positionQuota: {
    color: PRIMARY_COLOR_MEDIUM,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },
  positionQuotaFull: {
    color: '#FF6B6B',
  },
  positionHint: {
    color: PRIMARY_COLOR_MEDIUM,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  // Katılım Butonu
  joinButton: {
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  joinButtonDisabled: {
    backgroundColor: '#CCCCCC',
    elevation: 1,
  },
  joinButtonText: {
    color: SURFACE_COLOR,
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  // Açıklama Alanı
  descriptionText: {
    color: PRIMARY_COLOR_DARK,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    lineHeight: 20,
    textAlign: 'justify',
  },
});
