import React from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface Props {
    tasks: Task[];
    toggleTask: (id: number) => void;
}

const ToDoList: React.FC<Props> = ({ tasks, toggleTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;
