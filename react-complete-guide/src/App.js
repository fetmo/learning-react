import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'asdf1', name: "Laura", age: 30},
            {id: '2asdf', name: "Rafal", age: 32},
            {id: 'asdf4', name: "Robbie", age: 42},
        ],
        otherState: "some other value",
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex] //ES6
        };
        //const person = Object.assign({}, this.state.persons[personIndex]); //pre ES6

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
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
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            buttonstyle.backgroundColor = 'red';

            persons = (
                <div>
                    {this.state.persons.map((person, key, personArray) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(key)}
                                change={(event) => this.nameChangedHandler(event, person.id)}
                                name={person.name}
                                age={person.age}
                                key={person.id}/>
                        );
                    })}
                </div>
            );
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I am a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
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
