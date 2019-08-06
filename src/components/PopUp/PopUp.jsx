import React from 'react';

import './PopUp.css';
import AddItemForm from '../AddItemForm';

function PopUp({ onToggleUp, onAddTodoItem }) {
    return (
        <div className='popup'>
            <div className='popup-inner'>
                <h1>Write todo-item you want to add</h1>
                <AddItemForm
                    onToggleUp={onToggleUp}
                    onAddTodoItem={onAddTodoItem}
                />
            </div>
        </div>
    );
}

export default PopUp;