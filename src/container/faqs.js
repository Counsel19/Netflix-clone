import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";
import React from "react";

const FaqsContainer = () => {
  return (
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

      <OptForm>
        <OptForm.Input placeholder="Email Adress" />
        <OptForm.Button>Try it Now</OptForm.Button>

        <OptForm.Break />

        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
