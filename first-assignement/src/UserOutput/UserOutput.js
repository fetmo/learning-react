import React from 'react';

const userOutput = (props) => {
    const style = {
        margin: '0 auto',
        width: '40%',
        border: '2px solid yellow'
    }

    return (
        <div style={style}>
            <p>Username: {props.username}</p>
        </div>
    );
};

export default userOutput;