import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';

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
            filter: 'all',
            searchVal: ''
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
        this.setState(({ todosArr }) => {
            const newTodoItem = this.createItem(label);
            const newTodosArr = [...todosArr, newTodoItem];

            return {
                todosArr: newTodosArr
            };
        });
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
    onToggleImportant = (id) => this.toggleProperties(id, 'important');

    // toggle a value of property 'done' of todo-item 
    onToggleDone = (id) => this.toggleProperties(id, 'done');

    render() {
        const { todosArr } = this.state;

        return (
            <div className="app">
                {/* header */}
                <Header />
                {/* /header */}

                {/* todo-list */}
                <TodoList
                    todosArr={todosArr}
                    onDeleteTodoItem={this.deleteTodoItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                {/* /todo-list */}

                {/* add-item-form */}
                <AddItemForm 
                    onAddTodoItem={this.addTodoItem} 
                />
                {/* /add-item-form */}
            </div>
        );
    }
}

export default App;