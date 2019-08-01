import React from 'react';

import TodoListItem from '../../components/TodoListItem';

function TodoList({ todos, onDeleteItem, onToggleImportant, onToggleDone, onFilterItems, filter }) {
    const filteredItems = onFilterItems(todos, filter);
    const todoList = filteredItems.map((item) => {
        const { id, ...rest } = item;

        return (
            <li key={id}>
                <TodoListItem {...rest} onToggleDone={() => onToggleDone(id)}/>
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