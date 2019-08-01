import React from 'react';

function TodoListItem({ label, important, done, onToggleDone }) {
    let classNames;

    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }    

    return(
        <span className={classNames} onClick={onToggleDone}>{ label }</span>
    );
}

export default TodoListItem;