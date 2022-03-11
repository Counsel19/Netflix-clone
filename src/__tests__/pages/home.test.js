import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../../pages';

describe("Homepage", () => {
    it("renders the homepage", () =>{
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
    })
})