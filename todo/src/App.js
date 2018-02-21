import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ToDo - React & Redux</h1>
                </header>

                <Todo/>
            </div>
        );
    }
}

export default App;
