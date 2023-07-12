import React, { useState } from 'react';
import { TODOITEMS } from '../app/shared/TODOITEMS';
import Calendar from './Calendar';

const TodoListView = () => {

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
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Calendar onDateClick={handleDateClick} />
                </div>
                <div className="col-md-6">
                    {filteredItems.length > 0 ? (
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h2 className="card-title">
                                    To-Do Items for {selectedDate.toLocaleDateString('default')}
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
                    ) : (
                        <p className="text-center">No TODO items for the selected date.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoListView;
