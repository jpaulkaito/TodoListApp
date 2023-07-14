import React from 'react';
import { TODOITEMS } from '../app/shared/TODOITEMS';

const ViewAllTodoList = () => {
    // Create an object to store merged and sorted items by date
    const mergedItems = {};

    // Merge items with the same date
    TODOITEMS.forEach((item) => {
        if (!mergedItems[item.date]) {
            mergedItems[item.date] = [item];
        } else {
            mergedItems[item.date].push(item);
        }
    });

    // Sort the dates in ascending order
    const sortedDates = Object.keys(mergedItems).sort((a, b) => new Date(a) - new Date(b));

    return (
        <div>
            {sortedDates.length > 0 ? (
                <div className="card">
                    <div className="card-body">
                        {sortedDates.map((date) => (
                            <div key={date}>
                                <h4>{date}</h4>
                                {mergedItems[date].map((item) => (
                                    <div key={item.id} className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No To-Do items available.</p>
            )}
        </div>
    );
};

export default ViewAllTodoList;
