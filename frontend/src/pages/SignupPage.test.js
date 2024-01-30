import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { server } from "../mocks/server";
import SignupPage from "./SignupPage";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <UserContext.Provider value={providerProps}>{ui}</UserContext.Provider>,
    renderOptions
  );
};
 
describe("Signup Page", () => {
  let providerProps;

  beforeEach(() => {
    providerProps = {
      isLoading: false,
      setIsLoading: jest.fn(),
    };
  });

  test("should render correctly", () => {
    customRender(
      <Router>
        <SignupPage />
      </Router>,
      { providerProps }
    );
  });

  // test("should show error messages if any form fields are empty", async () => {
  //   customRender(
  //     <Router>
  //       <SignupPage />
  //     </Router>,
  //     { providerProps }
  //   );

  //   const createAccountButton = screen.getByRole("button", {
  //     name: /Create Account/i,
  //   });

  //   fireEvent.click(createAccountButton);

  //   await waitFor(() => {
  //     expect(screen.getByText("Please fill in all fields")).toBeInTheDocument();
  //   });
  // });

  test("should sign up a user when the form is submitted with valid data", async () => {
    customRender(
      <Router>
        <SignupPage />
      </Router>,
      { providerProps }
    );

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Enter your full name"), {
      target: { value: "Test User" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
      target: { value: "testuser5" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
      target: { value: "testuser5@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "testpassword" },
    });

    const createAccountButton = screen.getByRole("button", {
      name: /Create Account/i,
    });

    fireEvent.click(createAccountButton);

    // Wait for the API call to complete
    await waitFor(() => {
      expect(providerProps.setIsLoading).toHaveBeenCalledTimes(2);
    });
  });
});
