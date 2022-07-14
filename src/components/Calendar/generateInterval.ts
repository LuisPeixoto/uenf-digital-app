import { addDays, eachDayOfInterval, format } from 'date-fns';
import { DayProps, MarkedDayProps } from '.';
import theme from '../../Global/styles/theme';

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDayProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach(item => {
    const date = format(addDays(item, 1), 'yyyy-MM-dd');
    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : '#DFF0FF',

        textColor:
          start.dateString === date || end.dateString === date
            ? '#fff'
            : theme.colors.main,
      },
    };
  });

  return interval;
}
