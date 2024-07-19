import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Root from './root';

describe('Root component', () => {
  test('renders correctly and matches snapshot', () => {
    const { container } = render(<Root />);
    expect(container).toMatchSnapshot();
  });

  test('checks header background color', () => {
    const { container } = render(<Root />);
    const header = container.querySelector('header');

    // Проверка фона хедера
    expect(header).toHaveStyle('background-color: #484283');
  });

  test('checks footer background color', () => {
    const { container } = render(<Root />);
    const footer = container.querySelector('footer');

    // Проверка фона футера
    expect(footer).toHaveStyle('background-color: #444b58');
  });
});