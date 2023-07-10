import React, { useState } from 'react';

const Calendar = ({ onDateClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (dayNumber) => {
    const { year, month } = getYearAndMonth();
    const date = new Date(year, month, dayNumber);
    setSelectedDate(date);
    onDateClick(date); // Call the onDateClick prop with the selected date
  };

  const getYearAndMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return { year, month };
  };

  const { year, month } = getYearAndMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  return (
    <div>
      <h2>Calendar for {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil((daysInMonth + firstDay) / 7))
            .fill(null)
            .map((_, weekIndex) => (
              <tr key={`week-${weekIndex}`}>
                {Array(7)
                  .fill(null)
                  .map((_, dayIndex) => {
                    const dayNumber = weekIndex * 7 + dayIndex + 1 - firstDay;
                    const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;

                    return (
                      <td key={`day-${dayNumber}`}>
                        {isCurrentMonth ? (
                          <button
                            onClick={() => handleDateClick(dayNumber)}
                            className={selectedDate && selectedDate.getDate() === dayNumber ? 'selected' : ''}
                          >
                            {dayNumber}
                          </button>
                        ) : (
                          ''
                        )}
                      </td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
