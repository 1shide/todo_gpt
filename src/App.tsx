import { useState } from 'react';
import styles from './index.module.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
        },
      ]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed));
  };

  const handleFilterIncomplete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.filterButtons}>
        <button className={styles.filterButton} onClick={handleFilterCompleted}>
          <span className={`${styles.filterButton__icon} ${styles.completed}`}>
            &#x2714;
          </span>
          Completed
        </button>
        <button className={styles.filterButton} onClick={handleFilterIncomplete}>
          <span className={styles.filterButton__icon}>&#x2718;</span>
          Incomplete
        </button>
      </div>
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todoItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              className={`${styles.todoItem__text} ${todo.completed && styles.completed
                }`}
            >
              {todo.text}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              &#x2716;
            </button>
          </div>
        ))}
      </div>
      <div className={styles.addTodo}>
        <input
          className={styles.addTodo__input}
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className={styles.addTodo__button} onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
