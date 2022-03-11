/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles />", () => {
  it("renders the <Profile /> with populated data", () => {
    const { container } = render(
      <Profiles>
        <Profiles.Title>Who is Watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture src='/images/users/1.jpg' data-testid="profile-picture"/>
            <Profiles.Name>Counsel</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(screen.getByText('Who is Watching')).toBeTruthy();
    expect(screen.getByTestId('profile-picture')).toBeTruthy();
    expect(screen.getByText('Counsel')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
    
  });

  it("renders the <Profiles /> with populated data but with a misc image", () => {
    const { container } = render(
        <Profiles>
          <Profiles.Title>Who is Watching</Profiles.Title>
          <Profiles.List>
            <Profiles.User onClick={() => {}}>
              <Profiles.Picture data-testid="profile-picture-misc"/>
              <Profiles.Name>Counsel</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      );
  
      expect(screen.getByText('Who is Watching')).toBeTruthy();
      expect(screen.getByTestId('profile-picture-misc')).toBeTruthy();
      expect(screen.getByText('Counsel')).toBeTruthy();
      expect(container.firstChild).toMatchSnapshot();
  });
});
