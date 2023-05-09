import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import './App.css'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'uncompleted'>('all'); // フィルターのステート変数

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

  const clearCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  // フィルターの状態に応じて、表示するタスクのリストを変更する
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'uncompleted':
        return !task.completed;
      default:
        return true;
    }
  });



  return (
    <div>
      <h1>ToDo App</h1>
      <ToDoForm addTask={addTask} />
      <button onClick={() => setFilter('all')}>全て</button> // 全てのタスクを表示するフィルター
      <button onClick={() => setFilter('completed')}>完了済み</button> // 完了済みのタスクのみを表示するフィルター
      <button onClick={() => setFilter('uncompleted')}>未完了</button> // 未完了のタスクのみを表示するフィルター
      <ToDoList tasks={filteredTasks} toggleTask={toggleTask} filter={filter} />
      <button onClick={clearCompletedTasks}>完了済みタスクを削除</button>
    </div>
  );
};

export default App;

