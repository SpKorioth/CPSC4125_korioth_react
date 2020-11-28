import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: [],
            completedList: [],
            task: ''
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <form onSubmit={(e) => this.addItem(e)}>
                    <input 
                        type='text' 
                        className='input' 
                        placeholder='Enter to-do item' 
                        value={this.state.task} 
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <button type='submit'>add item</button>
                </form>
                <div className="Lists">
                    <TaskList title={'To do:'} buttonText={'done'} tasks={this.state.todoList} buttonFunction={this.removeItem}/>
                    <TaskList title={'Completed:'} buttonText={'delete'} tasks={this.state.completedList} buttonFunction={this.deleteItem}/>
                </div>
            </div>
        );
    }

    addItem(e){
        e.preventDefault();
        //check for empty field
        if(this.state.task !== ''){
        this.setState({task: '', todoList: [...this.state.todoList, this.state.task] });
        };
        //this.setState({todoList: 'item1'});
    }
    removeItem = key =>{
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        if(index > -1){
            todoList.splice(index, 1);
            this.setState({todoList: todoList})
            //add item to completed list below (probably fine to use key?)
            this.setState({completedList: [...this.state.completedList, key]});
        }
        //if(this.state.todoList != null){
        //    this.setState({todoList: null});
        //}
    }
    deleteItem = key =>{
        let completedList = this.state.completedList;
        let index = completedList.indexOf(key);
        if(index > -1){
            completedList.splice(index, 1);
            this.setState({completedList: completedList})
        }
    }
}

export default App;
