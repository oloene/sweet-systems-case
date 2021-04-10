import React from "react";
import "./styles.css";

export default function Card({ children, header, imgSrc, text, btnText }) {
    return (
        <div className="card">
            <div className="image">
                <img src={imgSrc} alt="" />
            </div>
            <div className="header">{header}</div>
            <div className="text">{text}</div>
            <div className="children">{children}</div>
        </div>
    );
}
