/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { OptForm } from "../../components";

describe("<OptForm>", () => {
  it("renders the <OptForm /> with populated data", () => {
    const { container } = render(
      <OptForm>
        <OptForm.Input placeholder="Email Adress" />
        <OptForm.Button>Try it Now</OptForm.Button>

        <OptForm.Break />

        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    );

    expect(screen.getByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
    expect(screen.getByPlaceholderText('Email Adress')).toBeTruthy();
    expect(screen.getByText('Try it Now')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
