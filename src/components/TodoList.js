import React from 'react';

const TodoList = ({ selectedDate, todoItems }) => {
  // Filter the todo items based on the selected date
  const filteredItems = todoItems.filter(item => item.date === selectedDate.toISOString().split('T')[0]);

  return (
    <div>
      <h3>Todo List for {selectedDate.toLocaleDateString()}</h3>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todo items for this date.</p>
      )}
    </div>
  );
};

export default TodoList;
