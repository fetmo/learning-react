import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Laura", age: 30},
            {name: "Rafal", age: 32},
            {name: "Robbie", age: 42},
        ],
        otherState: "some other value",
        showPersons: false
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 22},
                {name: "Rafal", age: 32},
                {name: "Robbie", age: 42},
            ]
        })
    }

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice(); //pre ES6
        const persons = [...this.state.persons]; //ES6
        persons.splice(index, 1);

        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const buttonstyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',

        };

        let persons = null;

        if (this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, key, personArray) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(key)}
                                name={person.name}
                                age={person.age} />
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi I am a React App</h1>
                <button
                    style={buttonstyle}
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
