import React from "react";
import HeaderContainer from "../container/header";
import { Feature, OptForm } from "../components";
import FaqsContainer from "../container/faqs";
import FooterContainer from "../container/footer";
import JumbotronContainer from "../container/Jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
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
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
