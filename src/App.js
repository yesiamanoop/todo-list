// App.js
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'; // Import custom CSS for styling

const App = () => {
    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default App;
