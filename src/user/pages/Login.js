import React from 'react'
import "../styles/Login.css";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from '../../shared/util/Validators';
function Login() {


    function submitForm(e) {
        e.preventDefault();
    }

    return (
        <div >
            <form id='loginContainer' onSubmit={submitForm}>
                <h2>Login</h2>
                <Input
                    id="userName"
                    label="UserName"
                    element="input"
                    validators={VALIDATOR_REQUIRE()}
                    errorText="Please enter Username"

                />
                <Input
                    id="userName"
                    label="UserName"
                    element="input"
                    validators={VALIDATOR_REQUIRE()}
                    errorText="Please enter Username"

                />
                <Button />
            </form>
        </div>
    );
}

export default Login;