import React, { useState } from "react";
import Navbar from "../components/ui/navbar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBanner from "../components/ui/top-banner";
import HomePage from "../components/pages/home-page";
import ApplicationsPage from "../components/pages/applications-page";
import { ApplicationContext } from "../applicationContext.js";
import faker from "faker";

const defaultApplications = [
    {
        name: "Dashboard",
        created: "2019-05-28",
        createdBy: faker.name.findName(),
        url: "test.my.sweetcloud.se",
    },
    {
        name: "Testboard",
        created: "2019-01-12",
        createdBy: faker.name.findName(),
        url: "test2.my.sweetcloud.se",
    },
    {
        name: "Boardtest",
        created: "2018-01-12",
        createdBy: faker.name.findName(),
        url: "atart.my.sweetcloud.se",
    },
];

export default function App() {
    const [applications, setApplications] = useState(defaultApplications);
    const [user, setUser] = useState("Magica Dimitrovo");

    return (
        <ApplicationContext.Provider
            value={{
                applications,
                setApplications,
                user,
                setUser,
            }}
        >
            <Router>
                <div>
                    <Navbar noOfApplications={applications.length} />
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
        </ApplicationContext.Provider>
    );
}
