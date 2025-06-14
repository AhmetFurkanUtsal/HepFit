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
const TEXT_SECONDARY = '#666666';
const TEXT_PRIMARY = '#183B4E';

export const styles = StyleSheet.create({
  // Ana Container
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  // Header
  header: {
    backgroundColor: PRIMARY_COLOR_MEDIUM,
    paddingTop: 50,
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
  // Calendar Section
  calendarSection: {
    backgroundColor: SURFACE_COLOR,
    margin: 16,
    borderRadius: 15,
    padding: 16,
    elevation: 3,
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  // Calendar Header
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  monthTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    color: TEXT_PRIMARY,
  },
  weekNavigation: {
    flexDirection: 'row',
    marginLeft: 15,
    gap: 8,
  },
  weekNavButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: CARD_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  toggleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  toggleButtonActive: {
    backgroundColor: TEXT_PRIMARY,
  },
  toggleButtonInactive: {
    backgroundColor: CARD_BACKGROUND,
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },
  toggleTextActive: {
    color: SURFACE_COLOR,
  },
  toggleTextInactive: {
    color: TEXT_PRIMARY,
  },
  // Calendar Grid
  calendarGrid: {
    marginBottom: 20,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayHeader: {
    width: (width - 64) / 7,
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayHeaderText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: TEXT_PRIMARY,
  },
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  dayCell: {
    width: (width - 64) / 7,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  dayNumber: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: TEXT_PRIMARY,
  },
  // Farklı day states
  dayToday: {
    backgroundColor: PRIMARY_COLOR_BRIGHT,
  },
  dayTodayText: {
    color: SURFACE_COLOR,
    fontFamily: 'Lato-Bold',
  },
  daySelected: {
    backgroundColor: TEXT_PRIMARY,
  },
  daySelectedText: {
    color: SURFACE_COLOR,
    fontFamily: 'Lato-Bold',
  },
  dayWithEvent: {
    position: 'relative',
  },
  eventDot: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: TEXT_PRIMARY,
  },
  // Events Section
  eventsSection: {
    margin: 16,
    marginTop: 0,
  },
  eventsSectionHeader: {
    marginBottom: 15,
  },
  eventsSectionTitle: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: TEXT_PRIMARY,
    marginBottom: 5,
  },
  eventsSectionDate: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: TEXT_SECONDARY,
  },
  // Event Card
  eventCard: {
    backgroundColor: SURFACE_COLOR,
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  eventCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: TEXT_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: TEXT_PRIMARY,
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: TEXT_SECONDARY,
  },
  eventLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  eventLocationText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: TEXT_PRIMARY,
  },
  locationIcon: {
    marginRight: 8,
  },
  // ScrollView
  contentContainer: {
    paddingBottom: 100, // Bottom nav bar için boşluk
  },
});
