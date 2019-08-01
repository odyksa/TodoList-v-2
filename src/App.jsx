import React, { Component } from 'react';

import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';

class App extends Component {
    constructor() {
        super();
        this.idCount = 100;
        this.state = {
            todos: [this.createItem('Start learning React'), this.createItem('Make awesome app'), this.createItem('Code refactoring'), this.createItem('Deploy app to GitHub Pages')]
        };
    }



    createItem = (text) => {
        return {
            label: text,
            important: false,
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

    onToggleImportant = (id) => {
        this.setState(({ todos }) => {
            const index = todos.findIndex((item) => item.id === id);
            const oldItem = todos[index];
            const newItem = {...oldItem, important: !oldItem.important};
            const before = todos.slice(0, index);
            const after = todos.slice(index + 1);

            return {
                todos: [...before, newItem, ...after]
            };
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <div className="app">
                <TodoList todos={todos} onDeleteItem={this.deleteItem} onToggleImportant={this.onToggleImportant}/>
                <AddItemForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;