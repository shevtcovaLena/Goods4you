import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Counter } from './Counter';

describe('Counter Component', () => {
  test('renders CartIcon button when count is 0 and max is 0', () => {
    render(<Counter count={0} max={0} onPlus={() => {}} onMinus={() => {}} />);

    expect(screen.getByTestId('cart')).toBeInTheDocument();
  });

  test('renders "Add to cart" button when count is 0 and max is not 0', () => {
    render(<Counter count={0} max={10} onPlus={() => {}} onMinus={() => {}} variation='large' />);

    expect(screen.getByRole('button')).toHaveTextContent('Add to cart');
  });

  test('renders counter display with item count and items when count is more than 0', () => {
    render(<Counter count={5} onPlus={() => {}} onMinus={() => {}} />);

    expect(screen.getByText('5 items')).toBeInTheDocument();
  });

  test('renders loader when isLoading is true', () => {
    render(<Counter count={5} isLoading={true} onPlus={() => {}} onMinus={() => {}} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('calls onPlus when "Add to cart" button is clicked', () => {
    const onPlus = jest.fn();
    render(<Counter count={0} max={10} onPlus={onPlus} onMinus={() => {}} />);

    fireEvent.click(screen.getByTestId('plus'));
    expect(onPlus).toHaveBeenCalled();
  });

  test('calls onMinus when minus button is clicked', () => {
    const onMinus = jest.fn();
    render(<Counter count={5} onPlus={() => {}} onMinus={onMinus} />);

    fireEvent.click(screen.getByTestId('minus'));
    expect(onMinus).toHaveBeenCalled();
  });

  test('disables plus button when count is equal to or greater than max', () => {
    render(<Counter count={10} max={10} onPlus={() => {}} onMinus={() => {}} />);

    expect(screen.getByTestId('plus')).toBeDisabled();
  });

  test('renders large variation correctly', () => {
    render(<Counter count={5} variation="large" onPlus={() => {}} onMinus={() => {}} />);

    expect(screen.getByTestId('minus')).toBeInTheDocument();
    expect(screen.getByTestId('plus')).toBeInTheDocument();
  });
});
