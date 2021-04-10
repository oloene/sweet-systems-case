import React from "react";
import "./styles.css";

export default function Button({ text, icon, onClick = () => {}, theme }) {
    return (
        <button
            className={`button-container ${theme ? theme : ""}`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="" />}
            <span>{text}</span>
        </button>
    );
}
