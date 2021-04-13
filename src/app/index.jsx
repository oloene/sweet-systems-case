import React, { useState } from "react";
import Navbar from "../components/ui/navbar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBanner from "../components/ui/top-banner";
import HomePage from "../components/pages/home-page";
import ApplicationsPage from "../components/pages/applications-page";
import { ApplicationContext } from "../applicationContext.js";
import { subDays } from "date-fns";
import faker from "faker";

const defaultApplications = [
    {
        name: "Dashboard",
        created: subDays(new Date(), 7),
        createdBy: faker.name.findName(),
        url: "test.my.sweetcloud.se",
    },
    {
        name: "Testboard",
        created: subDays(new Date(), 40),
        createdBy: faker.name.findName(),
        url: "test2.my.sweetcloud.se",
    },
    {
        name: "Boardtest",
        created: subDays(new Date(), 85),
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
