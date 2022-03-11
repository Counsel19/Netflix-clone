/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Player } from '../../components/';

describe('<Player />', () => {
    it("renders the <Player /> with a  bunny video", () => {
        const { container, getByText, queryByTestId } = render(
            <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
            </Player>
        );

        expect(queryByTestId('player')).toBeFalsy();
        fireEvent.click(getByText('Play'));

        expect(queryByTestId('player')).toBeTruthy();
        fireEvent.click(queryByTestId('player'));

        expect(queryByTestId('player')).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    })
})