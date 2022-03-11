/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Jumbotron } from "../../components";
import jumboData from "../../fixtures/jumbo.json";

describe("<Jumbotron />", () => {
  it("renders the <Jumbotron /> with populated data", () => {
    const { container } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => {
          return (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>

              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} data-testid="jumbotron-image"/>
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    );

    expect(screen.getByText('Enjoy on your TV.')).toBeTruthy();
    expect(screen.getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')).toBeTruthy();
    expect(screen.getAllByTestId('jumbotron-image')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot()
  });

  it("renders the <Jumbotron /> with populated data but without a direction", () => {
    const { container } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => {
          return (
            <Jumbotron key={item.id} data-testid={`${item.id}-jumbotron-default-direction`}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>

              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} data-testid="jumbotron-image"/>
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    );
        expect(screen.getByTestId('1-jumbotron-default-direction')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot()
  });

});
