import React, {Component} from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        textInput: '',
        textMin: 5
    };

    changeHandler = (event) => {
        const input = event.target.value;
        this.setTextAndLength(input);
    }

    deleteCharHandler = (key) => {
        let inputString = this.state.textInput;

        const inputArray = inputString.split('');
        inputArray.splice(key, 1);

        inputString = inputArray.join('');
        this.setTextAndLength(inputString);
    }

    setTextAndLength = (text) => {
        this.setState({
            textInput: text
        })
    }

    render() {
        let chars = null;

        if (this.state.textInput !== '') {
            chars = (
                <div>
                    {this.state.textInput.split('').map((el, key) => {
                        return (
                            <CharComponent
                                click={() => this.deleteCharHandler(key)}
                                letter={el}
                                key={el + key}/>
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <input type="text" onChange={(event) => this.changeHandler(event)} value={this.state.textInput}/>
                <p>Length of the text is: {this.state.textInput.length}</p>
                <ValidationComponent
                    min={this.state.textMin}
                    length={this.state.textInput.length}/>
                {chars}
            </div>
        );
    }
}

export default App;
