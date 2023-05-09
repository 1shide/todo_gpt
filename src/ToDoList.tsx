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
                <li
                    key={task.id}
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    onClick={() => toggleTask(task.id)}
                >
                    {task.text}
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;
