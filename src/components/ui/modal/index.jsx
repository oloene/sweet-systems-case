import React from "react";
import ReactDOM from "react-dom";
import closeIcon from "../../../assets/images/close.svg";
import "./styles.css";

export default function Modal({
    headerText,
    open,
    children,
    onClose,
    height = 350,
    width = 520,
}) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={onClose} />
            <div
                className="modal"
                style={{
                    height,
                    width,
                }}
            >
                <div className="modal-header">
                    <div className="modal-header-text">{headerText}</div>
                    <img
                        className="close"
                        onClick={onClose}
                        src={closeIcon}
                        alt=""
                    />
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </>,
        document.getElementById("portal")
    );
}
