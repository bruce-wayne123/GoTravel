import React, { useCallback } from "react";
import "../styles/NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators';
const NewPlace = () => {
    const titleInputHandler = useCallback((id, value, isValid) => {

    }, []);
    const descriptionInputHandler = useCallback((id, value, isValid) => {

    }, []);
    return <form className="place-form">
        <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid title"
            onInput={titleInputHandler}
        />
        <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid description(At least 5 characters)"
            onInput={descriptionInputHandler}
        />
    </form>
};

export default NewPlace;