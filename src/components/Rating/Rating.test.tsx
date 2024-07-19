// import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Rating } from './Rating';

describe('Rating component', () => {
  test('renders the correct number of stars based on the rating', () => {
    const { container } = render(<Rating rating={3} max={5} />);
    const filledStars = container.querySelectorAll('path[fill="#F14F4F"]');
    const emptyStars = container.querySelectorAll('path[fill="#D5D5D5"]');

    expect(filledStars.length).toBe(3);
    expect(emptyStars.length).toBe(2);
  });

  test('renders the correct number of stars when max is different', () => {
    const { container } = render(<Rating rating={2} max={4} />);
    const filledStars = container.querySelectorAll('path[fill="#F14F4F"]');
    const emptyStars = container.querySelectorAll('path[fill="#D5D5D5"]');

    expect(filledStars.length).toBe(2);
    expect(emptyStars.length).toBe(2);
  });

  test('renders no stars when rating is 0', () => {
    const { container } = render(<Rating rating={0} max={5} />);
    const filledStars = container.querySelectorAll('path[fill="#F14F4F"]');
    const emptyStars = container.querySelectorAll('path[fill="#D5D5D5"]');

    expect(filledStars.length).toBe(0);
    expect(emptyStars.length).toBe(5);
  });

  test('renders all stars filled when rating is equal to max', () => {
    const { container } = render(<Rating rating={5} max={5} />);
    const filledStars = container.querySelectorAll('path[fill="#F14F4F"]');
    const emptyStars = container.querySelectorAll('path[fill="#D5D5D5"]');

    expect(filledStars.length).toBe(5);
    expect(emptyStars.length).toBe(0);
  });
});