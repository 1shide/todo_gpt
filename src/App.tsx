import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const addTask = (text: string, completed: boolean) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1,
        text,
        completed,
      },
    ]);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <ToDoList tasks={tasks} toggleTask={toggleTask} />
      <ToDoForm addTask={addTask} />
    </div>
  );
};

export default App;
