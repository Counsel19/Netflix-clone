/* eslint-disable testing-library/no-node-access */
import React from "react";
import { fireEvent, screen, render, getByText, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../../components";
import { MemoryRouter } from "react-router";
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";

describe("<Header />", () => {
  it("renders <Header /> component with background", () => {
    const { container } = render(
      <MemoryRouter>
        <Header data-testid="background-shown" src="/images/users/1.jpg" dontShowOnSmallViewPort >
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} data-testid="logo" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In </Header.ButtonLink>
          </Header.Frame>
        </Header>
      </MemoryRouter>
    );

    expect(screen.getByText("Sign In")).toBeTruthy();
    expect(screen.getByTestId("background-shown")).toBeTruthy();
    expect(screen.getByTestId("logo")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders <Header /> component with background but withuot a source", () => {
    const { container } = render(
      <MemoryRouter>
        <Header data-testid="background-shown" >
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} data-testid="logo" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In </Header.ButtonLink>
          </Header.Frame>
        </Header>
      </MemoryRouter>
    );

    expect(screen.getByText("Sign In")).toBeTruthy();
    expect(screen.getByTestId("background-shown")).toBeTruthy();
    expect(screen.getByTestId("logo")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders <Header /> component without background", () => {
    const { container } = render(
      <MemoryRouter>
        <Header bg={false}>
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} data-testid="logo" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In </Header.ButtonLink>
          </Header.Frame>
        </Header>
      </MemoryRouter>
    );

    expect(screen.queryByTestId("background-shown")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Header.Feature /> component with populated data", () => {
    const { container } = render(
      <Header.Feature>
        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
        <Header.Text>
          You create a new user in your Firebase project by calling the
          createUserWithEmailAndPassword method or by signing in a user for the
          first time using a federated identity provider, such as Google Sign-In
          or Facebook Login.
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
    );

    expect(screen.getByText("Watch Joker Now")).toBeTruthy();
    expect(
      screen.getByText(
        "You create a new user in your Firebase project by calling the createUserWithEmailAndPassword method or by signing in a user for the first time using a federated identity provider, such as Google Sign-In or Facebook Login."
      )
    ).toBeTruthy();
    expect(screen.getByText("Play")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Header.Frame /> and children", () => {
    const { container } = render(
      <MemoryRouter>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} />
            <Header.TextLink active={true} onClick={() => {}}>Series</Header.TextLink>
            <Header.TextLink active={false} onClick={() => {}}>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm="Documentaries"
              setSearchTerm={() => {}}/>
            <Header.Profile>
              <Header.Picture
                src="/images.user/i.jpg"
                data-testid="header-image"
              />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture
                    src="/images.user/i.jpg"
                    data-testid="header-image"
                  />
                  <Header.TextLink>Counsel</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </MemoryRouter>
    );

    expect(screen.getByTestId('search-input')).toBeTruthy();
    expect(screen.getByTestId('search-input').value).toBe("Documentaries");
    fireEvent.change(screen.getByTestId('search-input'), {target: {value: "Counsel"}});  
    // expect(screen.getByTestId('search-input').value).toBe("Counsel");
    fireEvent.click(screen.getByTestId("search-icon"));
    // expect(screen.queryByTestId('search-input')).toBeFalsy();

    expect(screen.getByText("Series")).toBeTruthy();
    expect(screen.getByText("Films")).toBeTruthy();
    expect(screen.getAllByTestId("header-image")).toBeTruthy();
    expect(screen.getByText("Counsel")).toBeTruthy();
    expect(screen.getByText("Sign Out")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
