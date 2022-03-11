import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import {HeaderContainer, FooterContainer} from "../container";
import { Form } from "../components";
import * as ROUTES from '../constants/routes'
import { useNavigate } from "react-router-dom";



const Signin = () => {

  const { auth } = useContext(FirebaseContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const isInvalid = email === "" || password === "";

  const handleSignIn = async (e) => {
    e.preventDefault();

    //firebase work here
    try{
      setError("")
      await signInWithEmailAndPassword(auth, email, password);
      navigate(ROUTES.BROWSE)
    }catch(error){
      setEmail("");
      setPassword("");
      setError(error.message);
    }

  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} data-testid="sign-in" type="submit">
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
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
