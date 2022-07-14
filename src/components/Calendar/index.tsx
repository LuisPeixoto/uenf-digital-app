import React from 'react';
import {
  LocaleConfig,
  DateCallbackHandler,
  Calendar as Content,
} from 'react-native-calendars';
// import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Container } from './styles';
import { pt } from './localConfig';

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface MarkedDayProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface CalendarProps {
  markedDates: MarkedDayProps;
  onDayPress: DateCallbackHandler;
}

function Calendar() {
  const theme = useTheme();
  LocaleConfig.locales.pt = pt;
  LocaleConfig.defaultLocale = 'pt';
  return (
    <Container>
      <Content
        // renderArrow={direction => {
        //   const iconName = `chevron-${direction}`;
        //   return (
        //     <Feather
        //       name={iconName}
        //       size={24}
        //       color={theme.colors.text_detail}
        //     />
        //   );
        // }}

        minDate={new Date().toString()}
        firstDay={1}
        markingType="period"
        // markedDates={markedDates}
        // onDayPress={onDayPress}
        theme={{
          backgroundColor: theme.colors.main,
          calendarBackground: theme.colors.main,
          textSectionTitleColor: theme.colors.background_secondary,
          textDayFontFamily: theme.fonts.primary_400,
          textMonthFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_400,
          textDisabledColor: theme.colors.background_secondary,
          arrowColor: theme.colors.background_secondary,
          textDefaultColor: theme.colors.background_secondary,
          dayTextColor: theme.colors.background_secondary,
          monthTextColor: theme.colors.background_secondary,
          todayTextColor: '#000',
          todayBackgroundColor: '#6FA874',
        }}
      />
    </Container>
  );
}

export { Calendar, DayProps, MarkedDayProps };
