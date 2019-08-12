import React, { Component } from 'react';

import './SearchItemForm.css';

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
                    placeholder="Search task" 
                    onChange={this.handleChange}
                    value={this.state.searchVal}
                />
                <i className="fa fa-search" aria-hidden="true"></i>
            </form>
        );
    }

   
}

export default SearchItemForm;