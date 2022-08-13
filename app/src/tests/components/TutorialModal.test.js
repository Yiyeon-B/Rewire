import React from 'react';
import {fireEvent, render, screen,} from "@testing-library/react";
import HomePageBody from "../../components/HomePage/HomePageBody";
import BurgerMenu from "../../components/Nav/BurgerMenu";
import Nav from "../../components/Nav/Nav";
import HomePage from "../../components/HomePage/HomePage";
import TutorialModal from "../../components/Tutorial/TutorialModal";


describe("Rendering", () => {
    it('tutorial modal button should render on homepage when user is on BurgerMenu', () => {
        render(<BurgerMenu setAnchorEl={true} open={true}/>);
        const burgerBtn = screen.getByTestId('burger-button');
        fireEvent.click(burgerBtn);
        const buttonElement = screen.getByTestId('tutorial-button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('tutorial modal should render when user clicks tutorial button', () => {
        render(<HomePage setAnchorEl={true} open={true}/>);
        const burgerBtn = screen.getByTestId('burger-button');
        fireEvent.click(burgerBtn);
        const tutorialModal = screen.getByTestId('tutorial-button');
        fireEvent.click(tutorialModal);
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    })

    it('video should render on tutorial-modal when modal is open', () => {
        render(<HomePage setAnchorEl={true} open={true}/>);
        const burgerBtn = screen.getByTestId('burger-button');
        fireEvent.click(burgerBtn);
        const tutorialModal = screen.getByTestId('tutorial-button');
        fireEvent.click(tutorialModal);
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
        const videoElement = screen.getByTitle("video");
        fireEvent.click(videoElement);
        expect(videoElement).toBeVisible();
    });
});

it('escape key should close tutorial modal when modal is open', () => {
    render(<HomePage setAnchorEl = {true} open = {true}/>);
    const burgerBtn = screen.getByTestId('burger-button');
    fireEvent.click(burgerBtn);
    const tutorialModal = screen.getByTestId('tutorial-button');
    fireEvent.click(tutorialModal);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    fireEvent.keyDown(screen.getByText(/Lorem ipsum dolor sit amet/i), {
        key: 'Escape',
        code: 'Escape'
    });
    expect(screen.queryByText(/Lorem ipsum dolor sit amet/i)).not.toBeInTheDocument();
})


