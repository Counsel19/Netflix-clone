/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Loading } from "../../components";

describe('<Loading />', () => { 
    it("renders the <loading /> components", () => {
        const { container } = render(
            <Loading src="/images/users/i.jpg" data-testid="loading" />
        );
        expect(screen.getByTestId('loading')).toBeTruthy();
        expect(screen.getByTestId('loading-picture')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders the <Loading.ReleaseBody />", () => {
        const { container } = render(
            <Loading.ReleaseBody />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
 });