import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const headerElement = screen.getByText(/hello coders/i);
  expect(headerElement).toBeInTheDocument();

  const button = screen.getByText(/oprimir 2/i);
  expect(button).toBeInTheDocument();
});
