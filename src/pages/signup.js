import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { HeaderContainer, FooterContainer } from "../container";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let isInvalid = firstName === "" || email === "" || password === "";

  const handleSignUp = async (event) => {
    event.preventDefault();

    //Firebase Stuff
    try {
      setError("")
      isInvalid = false;
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, {
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      });
      navigate(ROUTES.BROWSE);
    } catch (error) {
      setFirstName("")
      setEmail('')
      setPassword('')
      setError(error.message)
      isInvalid = true;
    } 
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              value={email}
              placeholder="Email Adress"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signup">Sign in now</Form.Link>
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

export default Signup;
