import React, { Component } from 'react';

import './PopUp.css';
import AddItemForm from '../AddItemForm';

class PopUp extends Component {
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    getPopUpRef = (node) => {
        this._popup = node;
    }

    handleClickOutside = (event) => {
        const { onTogglePopUp } = this.props;

        if (this._popup && !this._popup.contains(event.target)) {
            onTogglePopUp();
        }
    }

    render() {
        const { onTogglePopUp, onAddTodoItem } = this.props;

        return (
            <div className='popup'>
                <div 
                    className='popup-inner'
                    ref={this.getPopUpRef}                
                >
                    <h1 className="popup-title">Type a task you want to add</h1>
                    <AddItemForm
                        onTogglePopUp={onTogglePopUp}
                        onAddTodoItem={onAddTodoItem}
                    />
                </div>
            </div>
        );
    }
}

export default PopUp;