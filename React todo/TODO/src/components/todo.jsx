import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]); // שדה מצב לאחסון המשימות
  const [input, setInput] = useState(''); // שדה מצב לאחסון הקלט

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]); // מוסיף את המשימה לרשימה
      setInput(''); // מאפס את הקלט
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // מסנן את המשימה שנמחקה
    setTasks(updatedTasks); // מעדכן את רשימת המשימות
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a new task..." 
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
