import React from "react";
import "./styles.css";
import NavApps from "../../../assets/images/navigationApps.svg";
import DataBase from "../../../assets/images/database.svg";
import Supervisor from "../../../assets/images/supervisorAccount.svg";
import Settings from "../../../assets/images/settings.svg";
import { NavLink } from "react-router-dom";

export default function Navbar({ noOfApplications }) {
    return (
        <nav className="navbar">
            <NavLink className="brand" to="/">
                Sweet
            </NavLink>
            <div className="list-items">
                <NavLink className="list-item" to="/applications">
                    <img src={NavApps} alt="" />{" "}
                    <div className="list-item-text">applications</div>
                    {noOfApplications > 0 && (
                        <div className="nr-applications">
                            <span>{noOfApplications}</span>
                        </div>
                    )}
                </NavLink>
                <NavLink className="list-item" to="/dataSources">
                    <img src={DataBase} alt="" />{" "}
                    <div className="list-item-text">data sources</div>
                </NavLink>
                <NavLink className="list-item" to="/userManagement">
                    <img src={Supervisor} alt="" />{" "}
                    <div className="list-item-text">user management</div>
                </NavLink>
                <NavLink className="list-item" to="/settings">
                    <img src={Settings} alt="" />{" "}
                    <div className="list-item-text">settings</div>
                </NavLink>
            </div>
            <div className="contact">
                <NavLink className="list-item" to="/support">
                    support
                </NavLink>
                <NavLink className="list-item" to="/knowledgeBase">
                    Knowledge base
                </NavLink>
                <NavLink className="list-item" to="/contact">
                    Contact us
                </NavLink>
            </div>
        </nav>
    );
}
