import React from 'react';
import './../css/index.css';


const Input = (props) => {
    return (
        <div className="inputne">
            <label>{props.labelText}</label>
            <input placeholder={props.placeholderText} onChange={props.onChangeInput} />
        </div>
    );
};

export default Input;