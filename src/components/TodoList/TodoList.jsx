import React from 'react';

import TodoListItem from '../../components/TodoListItem';

function TodoList({ todos }) {
    const todoList = todos.map((item) => {
        const { id, ...rest } = item;

        return (
            <li key={id}>
                <TodoListItem {...rest} />
                <button>Delete</button>
                <button>Important</button>
            </li>
        );
    });

    return(
        <ul className="todo-list">
            { todoList }
        </ul>
    );
}

export default TodoList;