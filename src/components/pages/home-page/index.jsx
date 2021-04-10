import React from "react";
import Card from "../../ui/card";
import dataCollecting from "../../../assets/images/dataCollecting.svg";
import userProfiles from "../../../assets/images/userProfiles.svg";
import hugoTrackStatistics from "../../../assets/images/hugoTrackStatistics.svg";
import Button from "../../ui/button";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function HomePage() {
    const history = useHistory();

    return (
        <div className="home-page">
            <div className="heading">Let's Get Started</div>
            <div className="sub-heading">
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </span>
                <br />
                <span>What do you want to do first?</span>
            </div>
            <div className="cards">
                <Card
                    header="Connect data sources"
                    text="You can build custom applications and make your work easier."
                    imgSrc={dataCollecting}
                >
                    <Button text="Connect" />
                </Card>
                <Card
                    header="Invite users"
                    text="You can build custom applications and make your work easier."
                    imgSrc={userProfiles}
                >
                    <Button text="Invite" />
                </Card>
                <Card
                    header="Build your own application"
                    text="You can build custom applications and make your work easier."
                    imgSrc={hugoTrackStatistics}
                >
                    <Button
                        text="Create"
                        onClick={() => history.push("/applications")}
                    />
                </Card>
            </div>
        </div>
    );
}
