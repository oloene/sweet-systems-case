import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react/cjs/react.development";
import closeIcon from "../../../assets/images/close.svg";
import "./styles.css";

export default function Modal({
    animation = null,
    open = false,
    headerText = "",
    children = null,
    onClose = () => null,
}) {
    const [showModal, setShowModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    /**
     * Add modal animation
     */
    useEffect(() => {
        if (!animation) {
            setShowModal(open);
        } else {
            const { duration } = animation;

            if (open) {
                setShowModal(true);

                setTimeout(() => {
                    setAnimateModal(true);
                }, duration);
            } else {
                setAnimateModal(false);

                setTimeout(() => {
                    setShowModal(false);
                }, duration);
            }
        }
    }, [open, showModal, animation]);

    return showModal
        ? ReactDOM.createPortal(
              <>
                  <div
                      className={`overlay ${
                          !animation
                              ? undefined
                              : animateModal
                              ? "animation after-open"
                              : "animation after-close"
                      }`}
                      onClick={onClose}
                      style={
                          animation
                              ? { transition: `${animation.duration}ms ease` }
                              : undefined
                      }
                  />
                  <div
                      className={`modal ${
                          !animation
                              ? undefined
                              : animateModal
                              ? "animation after-open"
                              : "animation after-close"
                      }`}
                      style={
                          animation
                              ? { transition: `${animation.duration}ms ease` }
                              : undefined
                      }
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
          )
        : null;
}
