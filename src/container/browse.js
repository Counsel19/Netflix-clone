import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";

import { FirebaseContext } from "../context/firebase";
import { Loading, Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(FirebaseContext);

  const user = auth.currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() =>  auth.signOut()}>Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            You create a new user in your Firebase project by calling the
            createUserWithEmailAndPassword method or by signing in a user for
            the first time using a federated identity provider, such as Google
            Sign-In or Facebook Login.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
