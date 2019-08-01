import React, { Component } from 'react';

import './App.css';
import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';

class App extends Component {
    constructor() {
        super();
        this.idCount = 100;
        this.state = {
            todos: [this.createItem('Start learning React'), this.createItem('Make awesome app'), this.createItem('Code refactoring'), this.createItem('Deploy app to GitHub Pages')],
            filter: 'all'
        };
    }



    createItem = (text) => {
        return {
            label: text,
            important: false,
            done: false,
            id: this.idCount++
        }
    };

    addItem = (label) => {
        const newItem = this.createItem(label);
        const newArr = [...this.state.todos, newItem];

        this.setState({
            todos: newArr
        });
    };

    deleteItem = (id) => {
        const newArr = this.state.todos.filter((item) => item.id !== id);
        this.setState({
            todos: newArr
        });
    };

    toggleProperties = (id, propName) => {
        this.setState(({ todos }) => {
            const index = todos.findIndex((item) => item.id === id);
            const oldItem = todos[index];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            const before = todos.slice(0, index);
            const after = todos.slice(index + 1);

            return {
                todos: [...before, newItem, ...after]
            };
        });
    }

    onToggleImportant = (id) => {
        this.toggleProperties(id, 'important');
    };

    onToggleDone = (id) => {
        console.log('done');
        this.toggleProperties(id, 'done');
    };

    filterItems = (items, filter) => {
        switch (filter) {
            case 'all': 
                return items;
            case 'active': 
                return items.filter((item) => !item.done);
            case 'done': 
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    render() {
        const { todos, filter } = this.state;

        return (
            <div className="app">
                <header>
                    <h1>TodoList</h1>
                </header>
                <p>Todo: {this.state.todos.filter((el) => !el.done).length}, done: {this.state.todos.filter((el) => el.done).length}</p>

                <div className="filters">
                    <button className={ ('all' === filter ? 'active' : '') } onClick={() => this.setState({filter: 'all'})}>All</button>
                    <button className={ ('active' === filter ? 'active' : '') } onClick={() => this.setState({filter: 'active'})}>Active</button>
                    <button className={ ('done' === filter ? 'active' : '') }onClick={() => this.setState({filter: 'done'})}>Done</button>
                </div>    

                <TodoList 
                    todos={todos} 
                    onDeleteItem={this.deleteItem} 
                    onToggleImportant={this.onToggleImportant} 
                    onToggleDone={this.onToggleDone}
                    onFilterItems={this.filterItems}
                    filter={this.state.filter}
                />
                <AddItemForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;