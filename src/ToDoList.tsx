import React from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface Props {
    tasks: Task[];
    toggleTask: (id: number) => void;
    filter: 'all' | 'completed' | 'uncompleted'; // フィルターのプロパティを追加
}

const ToDoList: React.FC<Props> = ({ tasks, toggleTask, filter }) => {
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
        <ul>
            {filteredTasks.map(task => (
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
