import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Calendar.style';

// --- Alt Bileşenler (Sub-components) ---
const CalendarHeader = ({
  currentMonth,
  viewMode,
  onViewModeChange,
  currentWeekText,
}) => (
  <View style={styles.calendarHeader}>
    <View style={styles.monthTitleContainer}>
      <Text style={styles.monthTitle}>
        {viewMode === 'week' ? currentWeekText : currentMonth}
      </Text>
    </View>
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          viewMode === 'month'
            ? styles.toggleButtonActive
            : styles.toggleButtonInactive,
        ]}
        onPress={() => onViewModeChange('month')}>
        <Text
          style={[
            styles.toggleText,
            viewMode === 'month'
              ? styles.toggleTextActive
              : styles.toggleTextInactive,
          ]}>
          Ay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          viewMode === 'week'
            ? styles.toggleButtonActive
            : styles.toggleButtonInactive,
        ]}
        onPress={() => onViewModeChange('week')}>
        <Text
          style={[
            styles.toggleText,
            viewMode === 'week'
              ? styles.toggleTextActive
              : styles.toggleTextInactive,
          ]}>
          Hafta
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const DayCell = ({day, isToday, isSelected, hasEvent, onPress}) => {
  const getCellStyle = () => {
    if (isToday) return [styles.dayCell, styles.dayToday];
    if (isSelected) return [styles.dayCell, styles.daySelected];
    return styles.dayCell;
  };

  const getTextStyle = () => {
    if (isToday) return [styles.dayNumber, styles.dayTodayText];
    if (isSelected) return [styles.dayNumber, styles.daySelectedText];
    return styles.dayNumber;
  };

  return (
    <TouchableOpacity
      style={[getCellStyle(), hasEvent && styles.dayWithEvent]}
      onPress={() => onPress(day)}>
      <Text style={getTextStyle()}>{day}</Text>
      {hasEvent && <View style={styles.eventDot} />}
    </TouchableOpacity>
  );
};

const CalendarGrid = ({
  selectedDay,
  onDayPress,
  viewMode,
  calendarData,
  currentWeekIndex,
}) => {
  const dayHeaders = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

  // Etkinlik olan günler
  const eventDays = [5, 18, 23, 26];
  const today = 15; // Bugün

  // Görünüm moduna göre gösterilecek veriyi hazırla
  const getDisplayData = () => {
    if (viewMode === 'week') {
      return [calendarData[currentWeekIndex]];
    }
    return calendarData;
  };

  const displayData = getDisplayData();

  return (
    <View style={styles.calendarGrid}>
      {/* Gün başlıkları */}
      <View style={styles.weekRow}>
        {dayHeaders.map((day, index) => (
          <View key={index} style={styles.dayHeader}>
            <Text style={styles.dayHeaderText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Takvim satırları */}
      {displayData.map((week, weekIndex) => (
        <View key={weekIndex} style={styles.calendarRow}>
          {week.map((day, dayIndex) => (
            <View key={dayIndex} style={styles.dayCell}>
              {day && (
                <DayCell
                  day={day}
                  isToday={day === today}
                  isSelected={day === selectedDay}
                  hasEvent={eventDays.includes(day)}
                  onPress={onDayPress}
                />
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const EventCard = ({event, onPress}) => (
  <TouchableOpacity style={styles.eventCard} onPress={() => onPress(event.id)}>
    <View style={styles.eventCardHeader}>
      <View style={styles.eventIcon}>
        <Icon name={event.icon} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventTime}>{event.time}</Text>
      </View>
    </View>
    <View style={styles.eventLocationContainer}>
      <Icon
        name="map-marker-outline"
        size={16}
        color="#183B4E"
        style={styles.locationIcon}
      />
      <Text style={styles.eventLocationText}>{event.location}</Text>
    </View>
  </TouchableOpacity>
);

const EventsSection = ({selectedDay, events, onEventPress}) => {
  const getDateText = () => {
    return `${selectedDay} Mayıs 2025`;
  };

  const dayEvents = events.filter(event => event.day === selectedDay);

  return (
    <View style={styles.eventsSection}>
      <View style={styles.eventsSectionHeader}>
        <Text style={styles.eventsSectionTitle}>Günün Etkinlikleri</Text>
        <Text style={styles.eventsSectionDate}>{getDateText()}</Text>
      </View>

      {dayEvents.length > 0 ? (
        dayEvents.map(event => (
          <EventCard key={event.id} event={event} onPress={onEventPress} />
        ))
      ) : (
        <View style={styles.eventCard}>
          <Text style={styles.eventTime}>Bu gün için etkinlik bulunmuyor.</Text>
        </View>
      )}
    </View>
  );
};

// --- Ana Sayfa Bileşeni (Main Page Component) ---
const Calendar = ({navigation}) => {
  // State'ler
  const [viewMode, setViewMode] = React.useState('month'); // 'month' veya 'week'
  const [selectedDay, setSelectedDay] = React.useState(18); // Seçili gün
  const [currentWeekIndex, setCurrentWeekIndex] = React.useState(2); // 0-4 arası hafta indexi

  // Örnek etkinlik verisi
  const events = [];

  // Mayıs 2025 takvim verisi (CalendarGrid'den taşındı)
  const calendarData = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null],
  ];

  // Haftalık görünüm başlığını oluştur
  const getCurrentWeekText = () => {
    const week = calendarData[currentWeekIndex];
    const validDays = week.filter(day => day !== null);
    if (validDays.length === 0) return 'Hafta';

    const startDay = validDays[0];
    const endDay = validDays[validDays.length - 1];
    return `${startDay}-${endDay} Mayıs 2025`;
  };

  // Görünüm modu değişimi
  const handleViewModeChange = mode => {
    setViewMode(mode);
    if (mode === 'week') {
      // Seçili günün hangi haftada olduğunu bul ve o haftayı göster
      for (let weekIndex = 0; weekIndex < calendarData.length; weekIndex++) {
        if (calendarData[weekIndex].includes(selectedDay)) {
          setCurrentWeekIndex(weekIndex);
          break;
        }
      }
    }
  };

  // Hafta değişimi
  const handleWeekChange = direction => {
    let newWeekIndex;
    if (direction === 'prev') {
      newWeekIndex = Math.max(0, currentWeekIndex - 1);
    } else {
      newWeekIndex = Math.min(calendarData.length - 1, currentWeekIndex + 1);
    }
    setCurrentWeekIndex(newWeekIndex);

    // Yeni haftanın ilk geçerli gününü seç
    const newWeek = calendarData[newWeekIndex];
    const firstValidDay = newWeek.find(day => day !== null);
    if (firstValidDay) {
      setSelectedDay(firstValidDay);
    }
  };

  // Gün seçimi
  const handleDayPress = day => {
    setSelectedDay(day);
  };

  // Etkinlik tıklama
  const handleEventPress = eventId => {
    navigation.navigate('MatchDetail', {matchId: eventId});
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <StatusBar barStyle="light-content" backgroundColor="#002D46" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Takvim</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.calendarSection}>
          <CalendarHeader
            currentMonth="Mayıs 2025"
            viewMode={viewMode}
            onViewModeChange={handleViewModeChange}
            currentWeekText={getCurrentWeekText()}
          />
          <CalendarGrid
            selectedDay={selectedDay}
            onDayPress={handleDayPress}
            viewMode={viewMode}
            calendarData={calendarData}
            currentWeekIndex={currentWeekIndex}
          />
        </View>

        <EventsSection
          selectedDay={selectedDay}
          events={events}
          onEventPress={handleEventPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;
