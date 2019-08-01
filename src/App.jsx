import React, { Component } from 'react';

import TodoList from './components/TodoList';

class App extends Component {
    constructor() {
        super();
        this.idCount = 100;
        this.state = {
            todos: [this.createItem('Start learning React'), this.createItem('Make awesome app'), this.createItem('Code refactoring'), this.createItem('Deploy app to GitHub Pages')]
        };
    }



    createItem = (text) => {
        console.log(this.idCount)
        return {
            label: text,
            important: false,
            id: this.idCount++
        }
    }

    render() {
        const { todos } = this.state;

        return (
            <div className="app">
                <TodoList todos={todos} />
            </div>
        );
    }
}

export default App;