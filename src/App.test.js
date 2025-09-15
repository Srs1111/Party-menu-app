import { render, screen } from "@testing-library/react";
import App from "./App";

test("render Party Menu Selection App  heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Party Menu Selection App/i);
  expect(headingElement).toBeInTheDocument();
});
