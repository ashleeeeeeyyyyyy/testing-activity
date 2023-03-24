import { render, screen } from '@testing-library/react'
import { Card } from '../Card'
import '@testing-library/jest-dom'

describe('Test Card Component', () => {
  const props = {
    header: 'header',
    description: 'description',
    link: 'https://www.example.com'
  }

  it('This should render the correct content', () => {
    render(<Card {...props} />)
    expect(screen.getByText('header')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.example.com'
    )
  })
})
