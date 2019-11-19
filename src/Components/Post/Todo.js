import React from 'react';

import '../../Styles/Post/Todo.css'

const Todo = (props) => {
    const { title, data } = props;
    return (
        <div className="post_todo">
            <h4 className="post_todo_title">{title}</h4>
            <div className="post_todo_list-container">
                {data.map((el, i) => {
                    const key = `post_todo-${i}`;
                    return (
                        <div key={key} className={`post_todo_element post_todo_element--${el.completed ? 'completed' : 'incompleted'}`}>
                            <span >{el.text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Todo;