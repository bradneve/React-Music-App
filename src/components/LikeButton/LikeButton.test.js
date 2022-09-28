import { screen } from '@testing-library/react';

import { LikeButton } from './index';

describe('LikeButton', () => {
    beforeEach(() => {
        render(<LikeButton/>)
    })

    test('renders a button with LIKE in it', () => {
        let likeBtn = screen.getByRole("switch")
        expect(likeBtn.textContent).toBe('LIKE')
    })

    test('changes colour of button when clicked', () => {
        let likeBtn = screen.getByRole("switch")
        let initColour = likeBtn.style.backgroundColor
        userEvent.click(likeBtn)
        let clickedColour = likeBtn.style.backgroundColor
        expect(clickedColour).not.toBe(initColour)
    })
})