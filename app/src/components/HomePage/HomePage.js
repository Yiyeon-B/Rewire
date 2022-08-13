import React from "react";
import HomePageBody from "./HomePageBody";
import Nav from "../Nav/Nav";
import "./HomePage.css";
import FAQ from "../FAQ/FAQ";
import TutorialModal from "../Tutorial/TutorialModal";


export default function HomePage() {
    const [showFAQModal, setFAQModal] = React.useState(false);
    const [showTutorialModal, tutorialModalOpenStatus] = React.useState(false);
        return (
            <>
                <Nav setFAQModal={setFAQModal} tutorialModalOpenStatus ={tutorialModalOpenStatus}/>
                <HomePageBody />
                <FAQ showFAQModal={showFAQModal} setFAQModal={setFAQModal}/>
                <TutorialModal showTutorialModal = {showTutorialModal} tutorialModalOpenStatus={tutorialModalOpenStatus} />
            </>
        );
    }

