import logo from './logo.svg';
import './App.css';
import './TaskList';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
        <h1>To-do List</h1>
        <input></input><button>add item</button>
        <TaskList />
        <TaskList />
    </div>
  );
}

export default App;
