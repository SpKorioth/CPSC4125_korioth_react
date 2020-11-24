import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: null
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <input></input><button onClick={() => this.addItem()}>add item</button>
                <TaskList title={'To do'} buttonText={'done'} tasks={this.state.todoList} buttonFunction={this.removeItem()}/>
                <TaskList title={'Complete'} buttonText={'delete'} tasks={'done'} buttonFunction={this.removeItem()}/>
            </div>
        );
    }

    addItem(){
        this.setState({todoList: 'item1'});
    }
    removeItem(){
        if(this.state.todoList != null){
            this.setState({todoList: null});
        }
    }
}

export default App;
