import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { ICartInfo, IUser } from '../../types/types';

const mockCartInfo = {
  totalQuantity: 3,
};

const mockUserInfo = {
  firstName: 'John',
  lastName: 'Doe',
};

describe('Navbar component', () => {
  test('renders catalog and FAQ links with correct paths', () => {
    render(
      <BrowserRouter>
        <Navbar cartInfo={mockCartInfo as ICartInfo} userInfo={mockUserInfo as IUser} />
      </BrowserRouter>
    );

    const catalogLink = screen.getByText(/Catalog/i);
    const faqLink = screen.getByText(/FAQ/i);

    expect(catalogLink).toHaveAttribute('href', '/#catalog');
    expect(faqLink).toHaveAttribute('href', '/#faq');
  });

  test('renders cart link with cart icon and quantity badge', () => {
    render(
      <BrowserRouter>
        <Navbar cartInfo={mockCartInfo as ICartInfo} userInfo={mockUserInfo as IUser} />
      </BrowserRouter>
    );

    const cartLink = screen.getByText(/Cart/i);
    const badge = screen.getByText(/3/i);

    expect(cartLink).toBeInTheDocument();
    expect(badge).toBeInTheDocument();
  });

  test('renders user name correctly', () => {
    render(
      <BrowserRouter>
        <Navbar cartInfo={mockCartInfo as ICartInfo} userInfo={mockUserInfo as IUser} />
      </BrowserRouter>
    );

    const userName = screen.getByText(/John Doe/i);
    expect(userName).toBeInTheDocument();
  });

  test('renders no badge when cartInfo.totalQuantity is 0', () => {
    const emptyCartInfo = { totalQuantity: 0 };

    render(
      <BrowserRouter>
        <Navbar cartInfo={emptyCartInfo as ICartInfo} userInfo={mockUserInfo as IUser} />
      </BrowserRouter>
    );

    const badge = screen.queryByText(/0/i);
    expect(badge).toBeNull();
  });
});