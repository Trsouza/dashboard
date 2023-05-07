import { getByTestId, render, screen } from '@testing-library/react';
import { Home } from './Home';

// npm run test -- --coverage --watchAll=false


jest.mock('../../services/api.tsx')

describe('Testing text rendering', () => {
  it('example 1', async () => {
    render(<Home />);
    expect(screen.getByText("Bitcoin summary")).toBeTruthy();
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

  it('example 2', async () => {

    // 1. renderizar o componente passando suas props
    // render(<Home />);

    // // 2. fazer a query do componente
    // const link = screen.getByText('Weekly overview')

    // // 4. descrever o resultado esperado
    // expect(link).toBeInTheDocument();


    const { container } = render(<Home />);
    const nameValue = getByTestId(container, "title");
    expect(await nameValue.textContent).toBe("Bitcoin summary");
  });
});


