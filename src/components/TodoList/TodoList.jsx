import React from 'react';

import TodoListItem from '../../components/TodoListItem';

function TodoList({ todos, onDeleteItem, onToggleImportant }) {
    const todoList = todos.map((item) => {
        const { id, ...rest } = item;

        return (
            <li key={id}>
                <TodoListItem {...rest} />
                <button onClick={() => onDeleteItem(id)}>Delete</button>
                <button onClick={() => onToggleImportant(id)}>Important</button>
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