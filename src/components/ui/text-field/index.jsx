import React, { useState } from "react";
import "./styles.css";

export default function TextField({
    property,
    errors,
    label,
    text,
    onChange = () => {},
    maxLength,
    minLength,
    suffix,
    validate = () => {},
}) {
    const [focused, setFocused] = useState(false);
    const hasErrors = errors[property].length > 0;

    return (
        <div className="text-field">
            <label
                className={`text-field-label ${focused ? "focused" : ""} ${
                    hasErrors ? "error" : ""
                }`}
                htmlFor={`${label}_id`}
            >
                {label}
            </label>
            <div
                className={`input-group ${focused ? "focused" : ""} ${
                    hasErrors ? "error" : ""
                }`}
            >
                <input
                    className="text-field-value"
                    value={text}
                    onChange={(e) => onChange(e.target.value, e)}
                    id={`${label}_id`}
                    onFocus={() => setFocused(true)}
                    onBlur={() => {
                        setFocused(false);
                        validate(property, text);
                    }}
                    maxLength={maxLength}
                    minLength={minLength}
                />
                {suffix && <div className="suffix">{suffix}</div>}
            </div>
            {hasErrors && (
                <div className="errors">*{errors[property].join(", ")}</div>
            )}
        </div>
    );
}
