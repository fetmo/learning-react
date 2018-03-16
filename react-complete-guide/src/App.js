import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi I am a React App</h1>
                <Person name="Laura" age="30"/>
                <Person name="Rafal" age="32">Hobbies: Boxing!</Person>
                <Person name="Robbie" age="42"/>
            </div>
        );
    }
}

export default App;
