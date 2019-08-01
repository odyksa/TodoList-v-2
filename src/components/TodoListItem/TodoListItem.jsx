import React from 'react';

function TodoListItem({ label, important }) {
    const style = important ? {color: 'red'} : {color: 'black'};

    return(
        <span style={style}>{ label }</span>
    );
}

export default TodoListItem;