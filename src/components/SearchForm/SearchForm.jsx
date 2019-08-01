import React, { Component } from 'react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeSearchValue(this.state.searchValue);
    }

    changeSearchValue = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    }

    render() {
        return (
            <form 
                className="search-form"
                onSubmit={this.handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Search items"
                    onChange={this.changeSearchValue}
                    value={this.state.searchValue}
                />
            </form>
        );
    }
}

export default SearchForm;