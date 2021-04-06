import React from "react";
import userBanner from "../../assets/images/userBanner.svg";
import navigationDropdown from "../../assets/images/navigationDropdown.svg";
import "./styles.css";

export default function TopBanner() {
    return (
        <div className="top-banner">
            <div className="current-user">
                <img src={userBanner} alt="" />
                <span>Magica</span>
                <img src={navigationDropdown} alt="" />
            </div>
        </div>
    );
}
