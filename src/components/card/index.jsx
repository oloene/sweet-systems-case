import React from "react";
import "./styles.css";

export default function Card({ header, imgSrc, text }) {
    return (
        <div className="card">
            <img src={imgSrc} alt="" />
            <div className="header">{header}</div>
            <div className="text">{text}</div>
            <button>connect</button>
        </div>
    );
}
