import React from "react";
import Navbar from "../components/navbar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBanner from "../components/top-banner";
import HomePage from "../components/home-page";
import ApplicationsPage from "../components/applications-page";

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <main className="main">
                    <TopBanner />
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/applications">
                            <ApplicationsPage />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
