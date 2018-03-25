import React from 'react';

const validationComponent = (props) => {
    let message = null;
    const inputLength = props.input.length;
    const min= props.min;
    const max = props.max;

    if(inputLength < min){
        message = (
            <p>Text too short</p>
        );
    }else if(inputLength > max){
        message = (
            <p>Text too long</p>
        );
    }

    return (
        message
    );
};

export default validationComponent