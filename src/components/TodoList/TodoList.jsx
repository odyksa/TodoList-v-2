import React from 'react';

import './TodoList.css';
import TodoItem from '../../components/TodoItem';

function TodoList(props) {
    const { todosArr, searchVal, onDeleteTodoItem, onToggleImportant, onToggleDone, onSearchTodoItem } = props;

    const visibleTodoItems = onSearchTodoItem(todosArr, searchVal);
    
    const todoList = visibleTodoItems.map((todoItem) => {
        const { id, ...otherProps } = todoItem;

        return (
            <li key={id}>
                <TodoItem 
                    {...otherProps} 
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onDeleteTodoItem={() => onDeleteTodoItem(id)}
                />
            </li>
        );
    });

    return (
        <ul className="todo-list">
            { todoList }
        </ul>
    );
}

export default TodoList;