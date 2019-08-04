import React from 'react';

import './TodoList.css';
import TodoItem from '../../components/TodoItem';

function TodoList(props) {
    const { todosArr, searchVal, filter, onDeleteTodoItem, onToggleImportant, onToggleDone, onSearchTodoItem, onFilterTodoItem } = props;

    const visibleTodoItems = onSearchTodoItem(onFilterTodoItem(todosArr, filter), searchVal);
    
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