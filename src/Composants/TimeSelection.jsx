import React from 'react';

const TimeSelection = ({ onTimeSelect, selectedTime }) => {
  const timeSlots = [
    { id: 1, label: 'Matin', times: ['08h-10h', '10h-12h'] },
    { id: 2, label: 'Après-midi', times: ['14h-16h', '16h-18h'] },
    { id: 3, label: 'Soir', times: ['18h-20h'] }
  ];

  return (
    <div className="space-y-2">
      <div className="text-xs text-gray-500">CRÉNEAU HORAIRE</div>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot) => (
          <div key={slot.id} className="space-y-1">
            <div className="text-sm font-medium text-gray-700">{slot.label}</div>
            {slot.times.map((time) => (
              <div 
                key={time}
                onClick={() => onTimeSelect(time)}
                className={`
                  p-2 border rounded-lg text-center cursor-pointer
                  ${selectedTime === time 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;