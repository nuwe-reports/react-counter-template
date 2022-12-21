import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("User stories", () => {
  let countLabel, incrementButton, decrementButton;

  beforeEach(() => {
    render(<App />);

    countLabel = screen.getByTestId("countLabel");
    incrementButton = screen.getByTestId("incrementButton");
    decrementButton = screen.getByTestId("decrementButton");
  });

  test("Count label initial value is equal to 1", () => {
    expect(countLabel.textContent).toBe("1");
  });

  test("Increment button is clicked and the value increments by 1", () => {
    userEvent.click(incrementButton);
    expect(countLabel.textContent).toBe("2");
  });

  test("Decrement button is clicked and the value decrements by 1", () => {
    userEvent.click(decrementButton);
    expect(countLabel.textContent).toBe("0");
  });
});
