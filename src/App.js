import React, { useState } from 'react';
import './App.css';
import { TODOITEMS } from './app/shared/TODOITEMS';
import Calendar from './components/Calendar';

function App() {
    const [selectedDate, setSelectedDate] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const filtered = TODOITEMS.filter((item) => item.date === date.toISOString().split('T')[0]);
        //const filtered = TODOITEMS.filter((item) => item.date === date.toLocaleDateString('default'));
        setFilteredItems(filtered);
        //console.log(date)
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Calendar onDateClick={handleDateClick} />
                    </div>
                </div>
                {filteredItems.length > 0 ? (
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h2 className="card-title">
                                        TODO Items for {selectedDate.toLocaleDateString('default')}
                                    </h2>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {filteredItems.map((item) => (
                                        <div key={item.id} className="list-group-item">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-6">
                            <p className="text-center text-muted">No TODO items for the selected date.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default App;
