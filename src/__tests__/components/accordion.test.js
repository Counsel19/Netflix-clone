/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import faqsData from "../../fixtures/faqs.json";
import { Accordion } from "../../components";

describe("<Accordion />", () => {
  it("renders the accordion with populated data", () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequestly Asked Questions</Accordion.Title>

        {faqsData.map((item) => {
          return (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );

    expect(getByText("Frequestly Asked Questions")).toBeTruthy();
    expect(getByText("What is Netflix?")).toBeTruthy();
    expect(getByText("How much does Netflix cost?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on Netflix?")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Opens and closes the <Accordion /> component", async () => {
    const { container, queryByText} = render(
      <Accordion>
        <Accordion.Title>Frequestly Asked Questions</Accordion.Title>

        {faqsData.map((item) => {
          return (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );

    const whatIsNetflixBodyText = "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

      expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
      fireEvent.click(queryByText('What is Netflix?'));
      expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();

      fireEvent.click(queryByText('What is Netflix?'));
      expect(container.firstChild).toMatchSnapshot()

  });
});
