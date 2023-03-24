import { render, screen } from '@testing-library/react'
import { CardContainer } from '../CardContainer'

describe('CardContainer', () => {
  const props = {
    cards: [
      {
        header: 'Card 1',
        description: 'Description 1',
        link: 'https://example1.com'
      },
      {
        header: 'Card 2',
        description: 'Description 2',
        link: 'https://example2.com/'
      }
    ]
  }
  it('This should return the correct number of cards', () => {
    render(<CardContainer {...props} />)
    const cards = screen.getAllByLabelText('card')
    expect(cards.length).toEqual(props.cards.length)
  })
})
