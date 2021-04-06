import React from "react";
import "./styles.css";
import NavApps from "../../assets/images/navigationApps.svg";
import DataBase from "../../assets/images/database.svg";
import Supervisor from "../../assets/images/supervisorAccount.svg";
import Settings from "../../assets/images/settings.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="brand" to="/">
                Sweet
            </NavLink>
            <div className="list-items">
                <NavLink className="list-item" to="/applications">
                    <img src={NavApps} alt="" /> applications
                </NavLink>
                <NavLink className="list-item" to="/todo1">
                    <img src={DataBase} alt="" /> data sources
                </NavLink>
                <NavLink className="list-item" to="/todo2">
                    <img src={Supervisor} alt="" /> user management
                </NavLink>
                <NavLink className="list-item" to="/todo3">
                    <img src={Settings} alt="" /> settings
                </NavLink>
            </div>
            <div className="contact">
                <NavLink className="list-item" to="/todo4">
                    support
                </NavLink>
                <NavLink className="list-item" to="/todo5">
                    Knowledge base
                </NavLink>
                <NavLink className="list-item" to="/todo6">
                    Contact us
                </NavLink>
            </div>
        </nav>
    );
}
