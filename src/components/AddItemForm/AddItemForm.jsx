import React, { Component } from 'react';

class AddItemForm extends Component {
    constructor() {
        super();
        this.state = {
            label: ''
        };
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
                />
                <button>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </form>
        );
    }
}

export default AddItemForm;