import React, { useState, useContext } from 'react'
import "../styles/Login.css";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators';
import { useForm } from '../../shared/hooks/form-hooks';
import { AuthContext } from "../../shared/Context/auth-context";
function Login() {

    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    function loginSubmitHandler(e) {
        e.preventDefault();
        auth.login();
        console.log(formState.inputs);
    }

    function switchModeHandeler() {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        }
        else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    }

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }

    }, false);

    return (
        <div className='authentication'>
            <Card>
                <form onSubmit={loginSubmitHandler}>
                    <h2>{isLoginMode ? "LOGIN" : "SIGNUP"}</h2>
                    {!isLoginMode && <Input
                        id="name"
                        label="Your Name"
                        element="input"
                        type="text"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name."
                        onInput={inputHandler}
                    />}
                    <Input
                        id="email"
                        label="Email"
                        element="input"
                        type="email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter a valid email address"
                        onInput={inputHandler}
                    />
                    <Input
                        id="password"
                        label="Password"
                        element="input"
                        type="password"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText="Please enter a valid password,atleast 5 characters."
                        onInput={inputHandler}
                    />
                    <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? "LOGIN" : "SIGNUP"}</Button>
                </form>
                <Button inverse
                    onClick={switchModeHandeler}>SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}</Button>
            </Card>
        </div>
    );
}

export default Login;