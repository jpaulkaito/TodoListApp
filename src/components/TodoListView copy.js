import React from 'react';

const TodoListView = ({ selectedDate, filteredItems }) => {
  return (
    <div>
      {filteredItems.length > 0 ? (
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
      ) : (
        <p className="text-center">No TODO items for the selected date.</p>
      )}
    </div>
  );
};

export default TodoListView;
