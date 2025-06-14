import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Renkler
const PRIMARY_COLOR_DARK = '#001F30';
const PRIMARY_COLOR_MEDIUM = '#002D46';
const PRIMARY_COLOR_BRIGHT = '#01649A';
const SURFACE_COLOR = '#FFFFFF';
const BACKGROUND_COLOR = '#F5F5F5';
const TEXT_COLOR_DARK = '#1F2937';
const TEXT_COLOR_MEDIUM = '#6B7280';
const BORDER_COLOR = '#E5E7EB';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: SURFACE_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR_DARK,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  // Form Alanları
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
    backgroundColor: SURFACE_COLOR,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: TEXT_COLOR_DARK,
  },
  locationText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: TEXT_COLOR_DARK,
  },
  // Seçenekler
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    backgroundColor: SURFACE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonSelected: {
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    borderColor: PRIMARY_COLOR_BRIGHT,
  },
  optionButtonText: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR_MEDIUM,
  },
  optionButtonTextSelected: {
    color: SURFACE_COLOR,
  },
  // Tarih ve Saat
  dateTimeContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  // Oluştur Butonu
  createButton: {
    backgroundColor: PRIMARY_COLOR_BRIGHT,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: SURFACE_COLOR,
  },
});

export default styles;
