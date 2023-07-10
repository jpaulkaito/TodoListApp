import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  render() {
    const { currentDate } = this.state;
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
  
    const daysArray = [...Array(daysInMonth).keys()].map(day => day + 1);
  
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
                      const date = new Date(year, month, dayNumber);
                      const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
  
                      return (
                        <td key={`day-${dayNumber}`}>
                          {isCurrentMonth ? (
                            <a
                              href="#"
                              onClick={() => {
                                alert(date + 'ABC');
                              }}
                            >
                              {dayNumber}
                            </a>
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
  }
  }

export default Calendar;
