import React from "react";
import Button from "../button";
import "./styles.css";

export default function Card({ header, imgSrc, text, btnText }) {
    return (
        <div className="card">
            <div className="image">
                <img src={imgSrc} alt="" />
            </div>
            <div className="header">{header}</div>
            <div className="text">{text}</div>
            {btnText && <Button text={btnText} />}
        </div>
    );
}
