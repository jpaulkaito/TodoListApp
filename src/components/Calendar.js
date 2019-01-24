import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Calendar = ({ onDateClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (dayNumber) => {
    const { year, month } = getYearAndMonth();
    const date = new Date(year, month, dayNumber);
    console.log(date);
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

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div>
      <div className="card">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          {/* <h2 className="card-title text-center">Calendar for {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2> */}
          <button className="btn btn-link text-white me-2" onClick={goToPreviousMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h2 className="card-title text-center mb-0">
            Calendar for {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button className="btn btn-link text-white" onClick={goToNextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
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
