/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {  MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { Signin } from "../../pages";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

// const firebase = {
//     auth: jest.fn(() =>({
//         signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am sign'))
//     }))
// }

const auth = jest.fn();

describe("<Signin />", () => {
  it("renders the sign in page with a form submission", async () => {
    render(
      <FirebaseContext.Provider value={{ auth }}>
        <MemoryRouter>
          <Signin />
        </MemoryRouter>
      </FirebaseContext.Provider>
    );

    await act( async () => {
        fireEvent.change(screen.getByPlaceholderText("Email Address"), { 
            target: { value: "okpabicounssel@gmail.com"}
        })
        fireEvent.change(screen.getByPlaceholderText("Password"), { 
            target: { value: "password"}
        })
        fireEvent.click(screen.getByTestId('sign-in'));

        expect(screen.getByPlaceholderText('Email Address').value).toBe('');
        expect(screen.getByPlaceholderText('Password').value).toBe('');
        expect( await screen.findByTestId('error')).toBeTruthy();
    })
  });
});
