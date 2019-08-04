import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
    const { label, done, important, onToggleDone, onToggleImportant, onDeleteTodoItem } = props;
    let clazz = '';
    let toggleClassDoneIcon = done ? 'fa-check-square-o' : 'fa-square-o';
    let toggleClassImportantIcon = important ? 'pink' : '';

    if (done) {
        clazz += ' done';
    }

    if (important) {
        clazz += ' important';
    }

    return (
        <p className="todo-item">
            <span
                className={`todo-item-val ${clazz}`}
            >
                <button
                    onClick={onToggleDone}
                >
                    <i 
                        className={`fa ${toggleClassDoneIcon}`}  aria-hidden="true" 
                        title = { done ? "Make undone" : "Make done" }
                    />
                </button>
                {label}
            </span>
            <span className="buttons-panel">
                <button
                    onClick={onToggleImportant}
                >
                    <i className={`fa fa-exclamation ${toggleClassImportantIcon}`} aria-hidden="true" title={ important ? "Make unimportant" : "Make Important"}></i>
                </button>

                <button
                    onClick={onDeleteTodoItem}
                >
                    <i className="fa fa-trash" aria-hidden="true" title="Delete"></i>
                </button>
            </span>
        </p>
    );
}

export default TodoItem;