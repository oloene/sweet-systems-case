import React from "react";
import Card from "../card";
import dataCollecting from "../../assets/images/dataCollecting.svg";
import userProfiles from "../../assets/images/userProfiles.svg";
import hugoTrackStatistics from "../../assets/images/hugoTrackStatistics.svg";
import "./styles.css";

export default function HomePage() {
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
                    btnText="Connect"
                />
                <Card
                    header="Invite users"
                    text="You can build custom applications and make your work easier."
                    imgSrc={userProfiles}
                    btnText="Invite"
                />
                <Card
                    header="Build your own application"
                    text="You can build custom applications and make your work easier."
                    imgSrc={hugoTrackStatistics}
                    btnText="Create"
                />
            </div>
        </div>
    );
}
