import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        usernames: [
            "fetmo"
        ]
    }

    changeUsernameHandler = (event) => {
        this.setState({
            usernames: [
                event.target.value
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <UserInput change={this.changeUsernameHandler} username={this.state.usernames[0]}/>
                <UserOutput username={this.state.usernames[0]}/>
            </div>
        );
    }
}

export default App;
