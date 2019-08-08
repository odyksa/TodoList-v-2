import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import SearchItemForm from './components/SearchItemForm';
import Filters from './components/Filters';
import Counters from './components/Counters';
import PopUp from './components/PopUp';

// ADD PROP-TYPES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class App extends Component {
    constructor() {
        super();

        // start value for creating id
        this.idCount = 100;

        this.state = {
            todosArr: [
                this.createTodoItem('Start learning React'),
                this.createTodoItem('Make awesome app'),
                this.createTodoItem('Code refactoring'),
                this.createTodoItem('Deploy app to GitHub Pages')
            ],
            searchVal: '',
            filter: 'all',
            showPopUp: false
        };
    }    

    // create todo-item
    createTodoItem = (text) => ({
        id: ++this.idCount,
        label: text,
        important: false,
        done: false        
    });

    // add todo-item
    addTodoItem = (label) => {
        if (label) {
            this.setState(({ todosArr, showPopUp}) => {
                const newTodoItem = this.createTodoItem(label);
                const newTodosArr = [...todosArr, newTodoItem];
    
                return {
                    todosArr: newTodosArr,
                    showPopUp: !showPopUp
                };
            });
        }
    };

    // delete todo-item
    deleteTodoItem = (id) => {
        this.setState(({ todosArr }) => {
            const newTodosArr = todosArr.filter((todoItem) => todoItem.id !== id);

            return {
                todosArr: newTodosArr
            };
        });
    };

    // change a name of todo-item for searching
    onChangeSearchVal = (newSearchVal) => {
        this.setState({
            searchVal: newSearchVal
        });
    };

    // search todo-item
    searchTodoItem = (todosArr, searchVal) => {
        const visibleTodoItems = todosArr.filter((todoItem) => {
            return todoItem.label.toLowerCase()
                .indexOf(searchVal.toLowerCase()) > - 1;
            });

        return visibleTodoItems;
    };

    // change a value of filter
    onChangeFilterVal = (newFilterVal) => {
        this.setState({
            filter: newFilterVal
        });
    };

    // filter todo-item
    filterTodoItem = (todosArr, filter) => {
        switch (filter) {
            case 'active': 
                return todosArr.filter((todoItem) => todoItem.done === false);
            case 'done': 
                return todosArr.filter((todoItem) => todoItem.done);
            default:
                return todosArr;
        }
    };

    // toggle a value of propName for todo-item in this.state.todosArr
    toggleProperties = (id, propName) => {
        this.setState(({ todosArr }) => {
            const indexOfTodoItem = todosArr.findIndex((todoItem) => todoItem.id === id);
            const oldTodoItem = todosArr[indexOfTodoItem];
            const newTodoItem = {...oldTodoItem, [propName]: !oldTodoItem[propName]};
            const arrBeforeOldTodoItem = todosArr.slice(0, indexOfTodoItem);
            const arrAfterOldTodoItem = todosArr.slice(indexOfTodoItem + 1);

            return {
                todosArr: [
                    ...arrBeforeOldTodoItem, 
                    newTodoItem,
                    ...arrAfterOldTodoItem]
            };
        });
    };

    // toggle a value of property 'important' of todo-item
    onToggleImportant = (id) => {
        this.toggleProperties(id, 'important');
    }

    // toggle a value of property 'done' of todo-item 
    onToggleDone = (id) => {
        this.toggleProperties(id, 'done');
    }

    // toggle popup
    togglePopUp = () => {
        this.setState(({ showPopUp }) => {
            return {
                showPopUp: !showPopUp
            }
        });
    }

    render() {
        const { todosArr, searchVal, filter } = this.state;

        return (
            <div className="app">
                {/* header */}
                <Header />
                {/* /header */}

                {/* search-item-form */}
                <SearchItemForm
                    onChangeSearchVal = {this.onChangeSearchVal}
                />    
                {/* /search-item-form */}
                
                {/* filters */}
                <Filters 
                    onChangeFilterVal={this.onChangeFilterVal}
                    filter={filter}
                />
                {/* /filters */}

                {/* todo-list */}
                <TodoList
                    todosArr={todosArr}
                    searchVal={searchVal}
                    filter={filter}
                    onDeleteTodoItem={this.deleteTodoItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    onSearchTodoItem={this.searchTodoItem}
                    onFilterTodoItem={this.filterTodoItem}
                />
                {/* /todo-list */}

                {/* counters */}
                <Counters todosArr={todosArr} />
                {/* /counters */}

                {/* add-item-form */}
                {/* <AddItemForm 
                    onAddTodoItem={this.addTodoItem} 
                /> */}
                {/* /add-item-form */}

                {/* button add item */}
                <button 
                    className="btn-add-item"
                    title="Add item"
                    onClick={this.togglePopUp}
                >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
                {/* /button add */}

                {/* popup */}
                {
                    this.state.showPopUp && 
                    <PopUp 
                        onTogglePopUp={this.togglePopUp}
                        onAddTodoItem={this.addTodoItem}
                    />
                }
                {/* /popup */}
            </div>
        );
    }
}

export default App;