import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import FAQ from "../../components/FAQ/FAQ";
describe("Header", () => {
    test("Checking if header appears in app", () => {
        render(<FAQ showFAQModal = {true} />);
        const headingElement = screen.getByTestId("Accordion-header");
        expect(headingElement).toBeInTheDocument();
    });
});
describe("Questions", () => {
    test("First Question", () => {
        render(<FAQ showFAQModal = {true} />);
        const FirstQuestion = screen.getByText("What is Cognitive Behavioral Therapy (CBT)?");
        expect(FirstQuestion).toBeInTheDocument();
    });
    test("Second Question", () => {
        render(<FAQ showFAQModal = {true} />);
        const thirdThought = screen.getByText("Should I work with a therapist?");
        expect(thirdThought).toBeInTheDocument();
    });
    test("Third Question", () => {
        render(<FAQ showFAQModal = {true} />);
        const ThirdQuestion = screen.getByText("What is a negative thought?");
        expect(ThirdQuestion).toBeInTheDocument();
    });
    test("Fourth Question", () => {
        render(<FAQ showFAQModal = {true} />);
        const FourthQuestion = screen.getByText("Is the negative thought true?");
        expect(FourthQuestion).toBeInTheDocument();
    });
    test("Fifth Question", () => {
        render(<FAQ showFAQModal = {true} />);
        const FifthQuestion = screen.getByText("Is there evidence to support that?");
        expect(FifthQuestion).toBeInTheDocument();
    });
    test("Sixth Question", () => {
        render(<FAQ showFAQModal = {true} />);
        const SixthQuestion = screen.getByText("Is there another way to look at the situation or your initial thought?");
        expect(SixthQuestion).toBeInTheDocument();
    });
});
describe("Answers", () => {
    test("Checking if the first answer appears in app", () => {
        render(<FAQ showFAQModal = {true} />);
        const OneAnswer = screen.getByText("Cognitive behavioral therapy (CBT) is a common type of talk therapy (psychotherapy). You work with a mental health counselor (psychotherapist or therapist) in a structured way, attending a limited number of sessions. CBT helps you become aware of inaccurate or negative thinking so you can view challenging situations more clearly and respond to them in a more effective way.")
        expect(OneAnswer).toBeInTheDocument();
    });
    test("Checking if the second answer appears in app", () => {
        render(<FAQ showFAQModal = {true} />);
        const TwoAnswer = screen.getByText("It is advised that you have been or will be working with a therapist in the future. This application is best used for therapeutic analysis and self-reflection and can help a great deal with therapy sessions.");
        expect(TwoAnswer).toBeInTheDocument();
    });
    test("Checking if the Third answer appears in app", () => {
        render(<FAQ showFAQModal = {true} />);
        const ThreeAnswer = screen.getByText("A negative thought is a thought that is self defeating and generates negative emotions such as anxiety, frustration, sadness, and anger.");
        expect(ThreeAnswer).toBeInTheDocument();
    });
    test("Checking if the Fourth answer appears in app", () => {
        render(<FAQ showFAQModal = {true} />);
        const FourAnswer = screen.getByText("Question if the negative thought is really true or if its something you want to be true.");
        expect(FourAnswer).toBeInTheDocument();
    });
    test("Checking if the Fifth answer appears in app", () => {
        render(<FAQ showFAQModal = {true} />);
        const FiveAnswer = screen.getByText("Is there hard proof that you have that can without a doubt prove that your negative thoughts are true?");
        expect(FiveAnswer).toBeInTheDocument();
    });
    test("Checking if the Sixth answer appears in app", () => {
        render(<FAQ showFAQModal = {true} />);
        const SixAnswer = screen.getByText("What other perspective could you use to look at this situation.");
        expect(SixAnswer).toBeInTheDocument();
    });
});