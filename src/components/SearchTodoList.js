import React, { useState } from 'react';
import EditTodoForm from '../forms/EditTodoForm';

const SearchTodoList = ({ todoList, handleDelete, handleUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const mergedItems = {};

  todoList.forEach((item) => {
    if (!mergedItems[item.date]) {
      mergedItems[item.date] = [item];
    } else {
      mergedItems[item.date].push(item);
    }
  });

  const sortedDates = Object.keys(mergedItems).sort((a, b) => new Date(a) - new Date(b));

  const filteredDates = sortedDates.filter((date) => {
    const items = mergedItems[date];
    return items.some(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredDates.length > 0 ? (
        <div className="card">
          <div className="card-body">
            {filteredDates.map((date) => (
              <div key={date}>
                <h4>{date}</h4>
                {mergedItems[date].map((item) => (
                  <div key={item.id} className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <p>
                        <strong>Status: </strong>
                        <span
                          className={item.status === 'Completed' ? 'Completed' : 'Pending'}
                        >
                          {item.status}
                        </span>
                      </p>
                      <div className="button-group">
                        <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
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
        <p>No matching To-Do items found.</p>
      )}
    </div>
  );
};

export default SearchTodoList;
