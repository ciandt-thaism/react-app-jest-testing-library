import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing App.js', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('render button disabled', () => {
    const { getByTestId } = render (<App />);
    const botaoRenderizado = getByTestId('botao');
    expect(botaoRenderizado).toHaveAttribute('disabled');
  });
});

