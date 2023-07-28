import React from 'react';
import EditTodoForm from '../forms/EditTodoForm';

const ViewAllTodoList = ({ todoList, handleDelete, handleUpdate }) => {
    const mergedItems = {};

    todoList.forEach((item) => {
        if (!mergedItems[item.date]) {
            mergedItems[item.date] = [item];
        } else {
            mergedItems[item.date].push(item);
        }
    });

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
                                            <p>
                                                <strong>Status: </strong>
                                                <strong>Status: </strong>
                                                <span
                                                    className={item.status === 'Completed' ? 'Completed' : 'Pending'}
                                                >
                                                    {item.status}
                                                </span>
                                            </p>
                                            <div className="button-group">
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)} >
                                                    Delete
                                                </button>
                                                <EditTodoForm todoList={item} handleUpdate={handleUpdate} />
                                            </div>
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
