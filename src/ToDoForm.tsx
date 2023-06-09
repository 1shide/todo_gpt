import React, { useState } from 'react';

interface Props {
    addTask: (text: string, completed: boolean) => void;
}

const ToDoForm: React.FC<Props> = ({ addTask }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text.trim(), false); // falseを追加
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default ToDoForm;
