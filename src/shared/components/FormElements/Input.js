import '../../styles/Input.css';

import React, { useReducer, useState } from 'react';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: true
            };
        default:
            return state;
    }
};

function Input(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    useReducer();
    const changeHandler = (event) => {

    }

    const element = props.element === 'input' ?
        <input id={props.id} type={props.type} placeholder={props.placeholder} />
        : <textarea id={props.id} rows={props.rows || 3} />;

    return (
        <div className={`form-control `}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
};

export default Input;