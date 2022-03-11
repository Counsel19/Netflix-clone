/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from "../../components";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("<Form />", () => {
  it("renders the <Form /> with populated data", () => {
    const { container } = render(
      <MemoryRouter>
        <Form>
          <Form.Title>Sign In</Form.Title>

          <Form.Base>
            <Form.Input
              type="email"
              placeholder="Email Address"
              onChange={() => {}}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              onChange={() => {}}
            />

            <Form.Submit disabled type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy();
    expect(screen.getByText(/sign up now/i)).toBeTruthy();
    expect(screen.getAllByText(/sign in/i)).toBeTruthy();
    expect(
      screen.getByRole("button", { name: /sign in/i }).disabled
    ).toBeTruthy();
    expect(screen.getByPlaceholderText(/email address/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Password/i)).toBeTruthy();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Form /> with an error", () => {
    const { container } = render(
      <Form>
        <Form.Error>Your Emaill address is currently being used</Form.Error>
        <Form.Submit type="submit">
          Sign In
        </Form.Submit>
      </Form>
    );

    expect(screen.getByText('Your Emaill address is currently being used')).toBeTruthy();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByRole('button', {name: /sign in/i}).disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot()
  });
});
