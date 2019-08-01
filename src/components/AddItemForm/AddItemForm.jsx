import React, { Component } from 'react';

class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        };
    }

    handleChangeLabel = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        this.props.onAddItem(label);
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
                <button>Add Item</button>
            </form>
        );
    }
}



export default AddItemForm;