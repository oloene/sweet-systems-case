import React from "react";
import Navbar from "../components/navbar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBanner from "../components/topBanner";
import HomePage from "../components/home-page";

const ApplicationPage = () => <div>applications</div>;

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <main className="main">
                        <TopBanner />
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/applications">
                            <ApplicationPage />
                        </Route>
                    </main>
                </Switch>
            </div>
        </Router>
    );
}
