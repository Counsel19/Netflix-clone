import React from "react";
import { render } from "@testing-library/react";
import { Feature, OptForm } from "../../components";

describe("<Feature />", () => {
  it("renders the <Feature /> component with populated data", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited Films, Tv Programs and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere, Cancel at anytime</Feature.SubTitle>

        <OptForm>
          <OptForm.Input placeholder="Email Adress" />
          <OptForm.Button>Try it Now</OptForm.Button>

          <OptForm.Break />

          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </Feature>
    );

    expect(getByText('Unlimited Films, Tv Programs and more.')).toBeTruthy();
    expect(getByText('Watch anywhere, Cancel at anytime')).toBeTruthy();
    expect(getByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot()
  });

  it("renders the <Feature /> component with only a title", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited Films, Tv Programs and more.</Feature.Title>
      </Feature>
    );

    expect(getByText('Unlimited Films, Tv Programs and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere, Cancel at anytime')).toBeFalsy();
    expect(queryByText('Ready to watch? Enter your email to create or restart your membership')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot()

  });

});
