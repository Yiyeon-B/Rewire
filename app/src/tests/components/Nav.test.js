import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "../../components/HomePage/HomePage";
import Nav from "../../components/Nav/Nav";

describe('Nav-burger-menu', () => {
    it('should render the nav component', () => {
        render(<Nav />);
        const navBar = screen.getByTestId("nav-bar");
        expect(navBar).toBeInTheDocument();
    });
    it('should render the burger menu button', () => {
        render(<Nav />);
        const buttonElement = screen.getByTestId('burger-button');
        expect(buttonElement).toBeInTheDocument();
    });
});

describe('Nav-logo-refresh', () => {
    it('should render the typography element', () => {
        render(<Nav />);
        const typographyElement = screen.getByTestId('logo-typography');
        expect(typographyElement).toBeInTheDocument();
    });

    it('should redirect to home page when rewire logo is clicked', () => {
        render(<Nav />);
        const typographyElement = screen.getByTestId('logo-typography');
        expect(typographyElement).toHaveAttribute('href', '/');
    });
    it('should get rid of the rewire logo link under line when the page loads', () => {
        render(<Nav />);
        const typographyElement = screen.getByTestId("logo-typography");
        expect(typographyElement).toHaveStyle('textDecoration: none');
    });
});

describe('burger-menu', () => {
    it('the burger menu should be open up', () => {
        render(<Nav />);
        const burgerElement = screen.getByTestId('burger-button');
        fireEvent.click(burgerElement);
        const menuElement = screen.getByTestId('burger-menu');
        expect(menuElement).toBeInTheDocument();
    });
    it('the menu item faq should appear when the menu open', () => {
        render(<Nav />);
        const burgerElement = screen.getByTestId('burger-button');
        fireEvent.click(burgerElement);
        const faqElement = screen.getByText(/faq/i);
        expect(faqElement).toBeInTheDocument();
    });
    it('the burger menu should close when faq menu-item clicked', () => {
        render(<HomePage />);
        const burgerElement = screen.getByTestId('burger-button');
        fireEvent.click(burgerElement);
        const faqElement = screen.getByTestId('faq-button');
        let menuElement = screen.getByTestId('burger-menu');
        expect(menuElement).not.toHaveAttribute("aria-hidden");
        fireEvent.click(faqElement);
        expect(faqElement).toBeInTheDocument();
    });
});
