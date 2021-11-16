import { render,screen } from '@testing-library/react'
import Circle from './circle'
test('should do somehing', () => {
    render(<Circle>Heyo</Circle>)
    const el = screen.getByText('Heyo')
    expect(el).toBeInTheDocument();
    
})
