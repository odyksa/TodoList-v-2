import React, { Component } from 'react';
import './AddItemForm.css';

class AddItemForm extends Component {
    constructor() {
        super();
        this.state = {
            label: ''
        };
    }

    componentDidMount = () => {
        this.input.focus();
    }

    handleChangeLabel = (e) => {
        const newLabel = e.target.value;


        this.setState({
            label: newLabel
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { label } = this.state;
        const { onAddTodoItem } = this.props;

        onAddTodoItem(label);

        this.setState({
            label: ''
        });
    }

    render() {
        const { onTogglePopUp } = this.props;

        return (
            <form
                className="add-item-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    placeholder="What needs to be done"
                    onChange={this.handleChangeLabel}
                    value={this.state.label}
                    ref={(input) => { this.input = input; }}
                />
                <div className="buttons">
                    <button 
                        title="Exit"
                        onClick={onTogglePopUp}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <button title="Add Item" type="submit">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default AddItemForm;