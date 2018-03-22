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

    switchNameHandler = (newName) => {
        // DONT DO THIS:
        // this.state.persons[index].name += " Clicked";

        this.setState({
            persons: [
                {name: "Laura Blöcher", age: 30},
                {name: "Rafal Wesolowski", age: 32},
                {name: newName, age: 42},
            ]
        })
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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        change={this.nameChangedHandler}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Dominik')}>Hobbies: Boxing!</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
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
