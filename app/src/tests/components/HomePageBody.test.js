import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import HomePageBody from "../../components/HomePage/HomePageBody";
import ThoughtPreview from "../../components/ThoughtPreview/ThoughtPreview";
import {getAllThoughts} from "../../services/cbtService";

jest.mock("../../services/cbtService");

describe("Header", () => {
  test("Checking if header appears in app", () => {
    render(<HomePageBody />);
    const headingElement = screen.getByTestId("body-heading");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("Header Content", () => {
  test("Checking if header content is correct", () => {
    render(<HomePageBody />);
    const headingElement = screen.getByTestId("body-heading");
    expect(headingElement.textContent).toEqual("Recently Added Thoughts");
  });
});

describe("Button Styling", () => {
  test("Checking if styled button appears", () => {
    render(<HomePageBody />);
    const addButtonpPlusSign = screen.getByText("+");
    expect(addButtonpPlusSign).toBeInTheDocument();
  });
});

describe("Button Caption", () => {
  test("Checking if Add a thought appears", () => {
    render(<HomePageBody />);
    const addButtonCaption = screen.getByText(/add a thought/i);
    expect(addButtonCaption).toBeInTheDocument();
  });
});

describe("Preview first Thought", () => {
  test("The first thought appears", async () => {
    const response = [{ thought: "a thought"}];  
    await getAllThoughts.mockResolvedValue(response);
    render(<ThoughtPreview />);
    expect(getAllThoughts).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByText(/Negative Thought/i)).toBeInTheDocument());
  });
});

describe("Preview Reframed Thought", () => {
  test("The reframed thought appears", async () => {
    const response = [{ thought: "a thought"}];  
    await getAllThoughts.mockResolvedValue(response);
    render(<ThoughtPreview />);
    expect(getAllThoughts).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByText(/Reframed Thought/i)).toBeInTheDocument());
  });
});

describe("Preview Box", () => {
  test("if the preview box appears", async () => {
    const response = [{ thought: "a thought"}];  
    await getAllThoughts.mockResolvedValue(response);
    render(<ThoughtPreview />);
    expect(getAllThoughts).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByTestId("preview-box-0")).toBeInTheDocument());
  });
});

describe("Preview Box Amount", () => {
  test("if the preview box appears", async () => {
    const response = [{ thought: "a thought"}];  
    await getAllThoughts.mockResolvedValue(response);
    render(<ThoughtPreview />);
    expect(getAllThoughts).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByTestId("preview-box-0").length).not.toBe(0));
  });
});

it('The first section of ThoughtForm should be rendered by default', () => {
  render(<HomePageBody />);
  const addAThoughtButton = screen.getByLabelText("Add a Thought");
  fireEvent.click(addAThoughtButton);
  const nextButtonElement = screen.getByLabelText('Next Button');
  expect(nextButtonElement).toBeInTheDocument();
});

it('The second section of ThoughtForm should be rendered when next button clicked', () => {
  render(<HomePageBody />);
  const addAThoughtButton = screen.getByLabelText("Add a Thought");
  fireEvent.click(addAThoughtButton);
  const nextButtonElement = screen.getByLabelText('Next Button');
  fireEvent.click(nextButtonElement);
  expect(screen.getByText('Back')).toBeInTheDocument();
});
