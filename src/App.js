import React from 'react';

function TodoItem() {
    return (
        <span>Drink delicious tea</span>
    );
}

function TodoList() {
    return (
        <ul>
            <li>
                <TodoItem />
            </li>
            <li>
                <TodoItem />
            </li>
            <li>
                <TodoItem />
            </li>
        </ul>
    );
}

export default TodoList;
