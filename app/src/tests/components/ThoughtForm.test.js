import { fireEvent, render, screen } from "@testing-library/react";
import ThoughtForm from "../../components/Thoughtform/ThoughtForm";

it('The first section of ThoughtForm should be rendered by default', () => {
    render(<ThoughtForm />);
    const nextButtonElement = screen.getByText('Next');
    expect(nextButtonElement).toBeInTheDocument();
});

it('The second section of ThoughtForm should be rendered when next button clicked', () => {
    render(<ThoughtForm />);
    const nextButtonElement = screen.getByText('Next');
    fireEvent.click(nextButtonElement);
    expect(screen.getByText('Back')).toBeInTheDocument();
});