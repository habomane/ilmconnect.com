import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import App from "@/app/App";

// Tests
describe("Renders main page correctly", async () => {
  it("Should render the page correctly with the text Hello", async () => {
    // Setup
    render(<App />);
    const h1 = await screen.queryByText("Hello");

    // Expectations
    expect(h1).toBeInTheDocument();
  });
});
