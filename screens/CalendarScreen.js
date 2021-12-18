import React, {useMemo, useState} from 'react';
import CalendarView from '../components/CalendarView';
import {format} from 'date-fns';
import {useContext} from 'react/cjs/react.development';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

export default function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelecedtDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }),
    [logs],
  );
  console.log(markedDates);
  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelecedtDate}
        />
      }
    />
  );
}
