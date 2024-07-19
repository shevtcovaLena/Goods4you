import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionItem } from './Accordion';
import styles from './Accirdion.module.css'; // Импортируем стили для проверки

// Мок данных
const title = 'Accordion Title';
const content = 'Accordion Content';

xdescribe('AccordionItem component', () => {
  test('renders with the correct title and content', () => {
    render(<AccordionItem title={title}>{content}</AccordionItem>);

    // Проверяем, что заголовок отображается
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    // Проверяем, что содержимое по умолчанию скрыто
    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument(); // Содержимое должно быть в DOM
    expect(contentElement).not.toBeVisible(); // Проверяем, что содержимое скрыто
  });

  test('displays content when clicked', () => {
    render(<AccordionItem title={title}>{content}</AccordionItem>);

    // Находим элемент заголовка и кликаем по нему
    const titleElement = screen.getByText(title);
    fireEvent.click(titleElement);

    // Проверяем, что содержимое стало видимым
    const contentElement = screen.getByText(content);
    expect(contentElement).toBeVisible(); // Проверяем, что содержимое видно
  });

  test('hides content when clicked again', () => {
    render(<AccordionItem title={title}>{content}</AccordionItem>);

    // Находим элемент заголовка и кликаем по нему дважды
    const titleElement = screen.getByText(title);
    fireEvent.click(titleElement); // Открыть
    fireEvent.click(titleElement); // Закрыть

    // Проверяем, что содержимое снова скрыто
    const contentElement = screen.getByText(content);
    expect(contentElement).not.toBeVisible(); // Проверяем, что содержимое снова скрыто
  });

  test('applies open styles when open', () => {
    const { container } = render(<AccordionItem title={title}>{content}</AccordionItem>);

    // Находим элемент заголовка и кликаем по нему
    const titleElement = screen.getByText(title);
    fireEvent.click(titleElement);

    // Проверяем, что элемент с контентом имеет открытые стили
    const contentElement = container.querySelector(`.${styles.content}`);
    expect(contentElement).toHaveClass(styles.open); // Проверяем, что содержимое имеет класс open
  });

  test('applies icon rotation when open', () => {
    const { container } = render(<AccordionItem title={title}>{content}</AccordionItem>);

    // Находим элемент заголовка и кликаем по нему
    const titleElement = screen.getByText(title);
    fireEvent.click(titleElement);

    // Проверяем, что иконка повернута
    const iconElement = container.querySelector(`.${styles.icon}`);
    expect(iconElement).toHaveClass(styles.open); // Проверяем, что иконка имеет класс open
  });
});
