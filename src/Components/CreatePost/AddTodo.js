import React, { useEffect, useState } from 'react';

import '../../Styles/CreatePost/AddTodo.css'


const createTask = () => {
    const id = Date.now();
    return {
        text: "Escribe aqui",
        completed: false,
        id: id,
        key: id
    }
}

const AddTodo = ({ onSave, configuration }) => {
    const [text, setText] = useState('Escribe tu titulo');

    const [task, setTask] = useState(createTask());



    const changeTaskStatus = (id) => {
        setTask({ ...task, completed: !task.completed });
    }
    const completedStyle = task.completed ? "add-todo_task--completed" : "";

    useEffect(() => {
        console.log(task.completed);
        onSave({ ...task, value: text, type: "todo", completed: task.completed });

    }, [onSave, task, text])
    return (
        <div className="add-todo">
            <div className="add-todo_task-container" >
                <div className="add-todo_complete-task_container" onClick={() => changeTaskStatus(task.id)} >
                    <div className={`add-todo_complete-task ${completedStyle}`} />
                </div>
                <textarea
                    className={`add-todo_task_text-area ${completedStyle}`}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    maxLength={configuration.MAXIMUN_CHARACTERS} />
            </div>
        </div>
    )
}

export default AddTodo;