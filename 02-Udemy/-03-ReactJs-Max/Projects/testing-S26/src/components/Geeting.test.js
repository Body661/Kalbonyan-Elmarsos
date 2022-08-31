import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting'

describe('<Greeting/>', () => {
    test('Renders Hello world', () => {
        render(<Greeting />)
        const element = screen.getByText(/hello world/i)
        expect(element).toBeInTheDocument()
    })

    test('Renders good to see you [Button not clicked]', () => {
        render(<Greeting />)
        const element = screen.getByText(/It's good to see you/i)
        expect(element).toBeInTheDocument()
    })

    test('Renders New text [Button clicked]', () => {
        render(<Greeting />)

        const button = screen.getByRole('button')
        userEvent.click(button)

        const element = screen.getByText(/New text/i)
        expect(element).toBeInTheDocument()
    })

    test('Does not render good to see you [Button clicked]', () => {
        render(<Greeting />)

        const button = screen.getByRole('button')
        userEvent.click(button)

        const element = screen.queryByText(/It's good to see you/i)
        expect(element).toBeNull()
    })
})