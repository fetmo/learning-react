import React from 'react';

const validationComponent = (props) => {
    const inputLength = props.length;
    const min= props.min;
    let message = (
        <p>Text too short</p>
    );

    if(inputLength > min){
        message = (
            <p>Text long enough!</p>
        );
    }

    return (
        message
    );
};

export default validationComponent