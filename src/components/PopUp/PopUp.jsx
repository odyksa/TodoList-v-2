import React from 'react';

import './PopUp.css';
import AddItemForm from '../AddItemForm';

function PopUp({ onTogglePopUp, onAddTodoItem }) {
    return (
        <div className='popup'>
            <div className='popup-inner'>
                <h1 className="popup-title">Type a task you want to add</h1>
                <AddItemForm
                    onTogglePopUp={onTogglePopUp}
                    onAddTodoItem={onAddTodoItem}
                />
            </div>
        </div>
    );
}

export default PopUp;