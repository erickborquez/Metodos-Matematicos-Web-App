import React from 'react';

const Todo = (props) => {
    const { data } = props;
    return (
        <div className="post_todo">
            {data.map((el, i) => {
                const key = `post_todo-${i}`;
                return (
                    <div key={key} className="post_todo_element">
                        <span></span>
                    </div>
                )
            })}
        </div>
    );
};

export default Todo;