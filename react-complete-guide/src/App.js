import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "Laura", age: 30},
            { name: "Rafal", age: 32},
            { name: "Robbie", age: 42},
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi I am a React App</h1>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Boxing!</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
