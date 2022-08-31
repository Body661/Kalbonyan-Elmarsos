import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('Renders posts if request succedss', async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'm1', title: 'First post' }]
        })
        render(<Async />)
        const elements = await screen.findAllByRole('listitem')
        expect(elements).not.toHaveLength(0)
    })
})