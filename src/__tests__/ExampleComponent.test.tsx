import ExampleComponent from '@/components/sample/ExampleComponent';
import { render, screen } from '@testing-library/react';
test('renders a welcome message', () => {
  render(<ExampleComponent />)
  expect(screen.getByRole('heading')).toHaveTextContent('Hello, world!');
})
