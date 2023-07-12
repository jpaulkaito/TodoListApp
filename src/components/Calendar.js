import React, { useState } from 'react';

const Calendar = ({ onDateClick }) => {
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (dayNumber) => {
    const { year, month } = getYearAndMonth();
    const date = new Date(year, month, dayNumber);
    setSelectedDate(date);
    onDateClick(date);
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
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="card-title text-center">Calendar for {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th className="text-danger">Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th className="text-primary">Sat</th>
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
                      <td key={`day-${dayNumber}`} className="text-center">
                        {isCurrentMonth ? (
                          <button
                            onClick={() => handleDateClick(dayNumber)}
                            className={`btn btn-sm ${selectedDate && selectedDate.getDate() === dayNumber ? 'btn-primary' : 'btn-light'}`}
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
