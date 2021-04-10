import React, { useState } from "react";
import { nameValidator, urlValidator } from "../../../utils/validators";
import Button from "../button";
import TextField from "../text-field";
import "./styles.css";

const NAME_MIN = 3;
const NAME_MAX = 100;

const defaultFormValues = {
    name: "",
    url: "",
};

const defaultErrors = {
    name: [],
    url: [],
};

export default function CreateNewForm({ setShowModal }) {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const [errors, setErrors] = useState(defaultErrors);

    /**
     * Validators for all form values
     */
    const validators = {
        name: (name) => nameValidator(name),
        url: (url) => urlValidator(url),
    };

    /**
     * Validates a field after onBlur is called
     */
    function onValidate(property, value) {
        const errors = validators[property](value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [property]: errors,
        }));
    }

    /**
     * Saves a new application
     */
    function saveNewApplication() {
        let hasError = false;
        for (const [property, value] of Object.entries(formValues)) {
            if (validators[property](value).length > 0) {
                hasError = true;
                break;
            }
        }

        if (hasError) {
            // Create error object..
            const errors = Object.entries(formValues).reduce(
                (errors, [property, value]) => {
                    errors[property] = [
                        ...(errors[property] || []),
                        ...validators[property](value),
                    ];

                    return errors;
                },
                {}
            );
            setErrors(errors);
            return;
        }

        // Save valid..
        alert("Saved!");
    }

    return (
        <div className="form">
            <TextField
                property="name"
                errors={errors}
                text={formValues.name}
                label="Name"
                onChange={(value) =>
                    setFormValues((prevState) => ({
                        ...prevState,
                        name: value,
                    }))
                }
                validate={onValidate}
                minLength={NAME_MIN}
                maxLength={NAME_MAX}
            />
            <TextField
                property="url"
                errors={errors}
                text={formValues.url}
                label="URL address"
                onChange={(value) =>
                    setFormValues((prevState) => ({
                        ...prevState,
                        url: value,
                    }))
                }
                validate={onValidate}
                suffix=".my.sweetcloud.se"
            />
            <div className="button-group">
                <Button
                    text="Cancel"
                    theme="light"
                    onClick={() => setShowModal(false)}
                />
                <Button text="Save" onClick={() => saveNewApplication()} />
            </div>
        </div>
    );
}
