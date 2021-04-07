import React from "react";
import "./styles.css";

export default function Button({ text, icon, onClick = () => {} }) {
    return (
        <button className="button" onClick={onClick}>
            <div className="button-group">
                {icon && <img src={icon} alt="" />}
                <span>{text}</span>
            </div>
        </button>
    );
}
