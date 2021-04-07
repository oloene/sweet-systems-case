import React from "react";
import userBanner from "../../assets/images/userBanner.svg";
import navigationDropdown from "../../assets/images/navigationDropdown.svg";
import { useLocation } from "react-router";
import doorenterance from "../../assets/images/doorenterance.svg";
import "./styles.css";

export default function TopBanner() {
    const path = useLocation().pathname;

    const pathName = path.length > 1 && path[1].toUpperCase() + path.substr(2);

    return (
        <div className="top-banner">
            <div className="current-location">
                {pathName && (
                    <img
                        className="current-location-image"
                        src={doorenterance}
                        alt=""
                    />
                )}
                {pathName}
            </div>
            <div className="current-user">
                <img src={userBanner} alt="" />
                <span>Magica</span>
                <img src={navigationDropdown} alt="" />
            </div>
        </div>
    );
}
