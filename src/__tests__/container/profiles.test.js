import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { SelectProfileContainer } from "../../container/profiles";
import { MemoryRouter } from "react-router";


describe("<Profiles />", () => {
    it("reners the <Profiles />", () => {
        const user = {displayName: 'Counsel', photoURL: 'profile.png'};
        const setProfile = jest.fn();
        render (
            <MemoryRouter>
                <SelectProfileContainer user={user} setProfile={setProfile} />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByTestId('user-profile'));
        expect(setProfile).toHaveBeenCalled();
    })
})