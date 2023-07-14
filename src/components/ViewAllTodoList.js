import React from 'react';

const ViewAllTodoList = ({ tasks, sessionTasks }) => {
  const allTasks = [...tasks, ...sessionTasks];

  return (
    <div>
      {allTasks.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAllTodoList;
