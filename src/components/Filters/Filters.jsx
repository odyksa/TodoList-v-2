import React, { Component } from 'react';

class SearchItemForm extends Component {
    constructor() {
        super();
        this.state = {
            searchVal: ''
        }
    }

    handleChange = (e) => {
        const newSearchVal = e.target.value;
        const { onChangeSearchVal } = this.props;

        this.setState({
            searchVal: newSearchVal
        });

        onChangeSearchVal(newSearchVal);
    };
        
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form 
                className="search-item-form"
                onSubmit={this.handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Type to search todo-item" 
                    onChange={this.handleChange}
                    value={this.state.searchVal}
                />
            </form>
        );
    }

   
}

export default SearchItemForm;