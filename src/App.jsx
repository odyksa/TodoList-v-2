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

    render() {
        const { todos } = this.state;

        return (
            <div className="app">
                <TodoList todos={todos} onDeleteItem={this.deleteItem} />
                <AddItemForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;