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
        <div className="todo-item">
            <span
                className={`todo-item-val ${clazz}`}
            >
                <button
                    onClick={onToggleDone}
                    title = { done ? "Make undone" : "Make done" }
                >
                    <i 
                        className={`fa ${toggleClassDoneIcon}`}  aria-hidden="true"
                    />
                </button>
                {label}
            </span>
            <span className="buttons-panel">
                <button
                    onClick={onToggleImportant}
                    title={ important ? "Make unimportant" : "Make important"}
                >
                    <i className={`fa fa-exclamation ${toggleClassImportantIcon}`} aria-hidden="true"></i>
                </button>

                <button
                    onClick={onDeleteTodoItem}
                    title="Delete"
                >
                    <i className="fa fa-trash" aria-hidden="true" ></i>
                </button>
            </span>
        </div>
    );
}

export default TodoItem;