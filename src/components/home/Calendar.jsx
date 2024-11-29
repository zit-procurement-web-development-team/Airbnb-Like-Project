import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { addMonths, format } from 'date-fns';

const Calendar = ({ selectedRange, onSelect }) => {
  const pastMonth = new Date();
  const disabledDays = { before: new Date() };
  
  const modifiersStyles = {
    selected: {
      backgroundColor: '#222222',
      color: 'white',
    },
    today: {
      backgroundColor: '#F7F7F7',
      color: '#222222',
    },
  };

  const modifiers = {
    selected: selectedRange,
  };

  return (
    <div className="flex gap-8 p-8 justify-center z-20">
      <DayPicker
        mode="range"
        defaultMonth={pastMonth}
        selected={selectedRange}
        onSelect={onSelect}
        numberOfMonths={2}
        disabled={disabledDays}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        styles={{
          caption: { color: '#222222' },
          head_cell: { color: '#717171' },
        }}
      />
    </div>
  );
};

export default Calendar;
