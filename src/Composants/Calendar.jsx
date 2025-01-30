import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    onDateSelect(newDate);
  };

  const monthFormatter = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
        >
          <FaChevronLeft />
        </button>
        <span className="font-medium">{monthFormatter.format(currentMonth)}</span>
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
          <div key={day} className="text-xs text-gray-500">{day}</div>
        ))}
        
        {[...Array(42)].map((_, index) => {
          const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
          const daysInMonth = getDaysInMonth(currentMonth);
          const day = index - firstDayOfMonth + 1;
          const isValidDay = day > 0 && day <= daysInMonth;
          const isSelected = selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === currentMonth.getMonth();

          return (
            <div 
              key={index}
              onClick={() => isValidDay && handleDateSelect(day)}
              className={`
                text-center p-2 text-sm rounded-full
                ${isValidDay ? 'cursor-pointer hover:bg-blue-100' : 'invisible'}
                ${isSelected ? 'bg-blue-600 text-white' : ''}
              `}
            >
              {isValidDay ? day : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;