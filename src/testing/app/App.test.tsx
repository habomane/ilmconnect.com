import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import App from "@/app/App";

// Tests
describe("Renders header correctly", async () => {
  it('renders correctly in logged out state', () => {
    // Setup
     render(<App />);

    // Check if the logo text is present
     expect(screen.getByText('IlmConnect')).toBeInTheDocument();
    
    // Check if the login button is present when not logged in
    expect(screen.getByText('Login')).toBeInTheDocument();
    
    // Check if the sign up button is present when not logged in
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });
});


