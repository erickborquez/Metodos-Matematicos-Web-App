import React from 'react';

import '../../Styles/Post/Todo.css'

const Todo = ({ value, completed }) => {

    const completedStyle = completed ? "add-todo_task--completed" : "";

    return (
        <div className="post_todo">
            <div className="post_todo_list-container">
                <div className="add-todo_complete-task_container" >
                    <div className={`add-todo_complete-task ${completedStyle}`} />
                </div>
                <div className={`post_todo_element post_todo_element--${completed ? 'completed' : 'incompleted'}`}>
                    <span >{value}</span>
                </div>
            </div>
        </div >
    )
};

export default Todo;