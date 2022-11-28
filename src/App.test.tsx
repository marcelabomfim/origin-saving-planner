import { App } from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Saving Planner', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('form fields', () => {
    it('renders form field amount as input element', () => {
      expect(screen.getByTestId('amount')).toBeInTheDocument();
      expect(screen.getByTestId('amount') instanceof HTMLInputElement).toBeTruthy();
    });

    it('renders form field reachDate as input element', () => {
      expect(screen.getByTestId('reachDate')).toBeInTheDocument();
      expect(screen.getByTestId('reachDate') instanceof HTMLInputElement).toBeTruthy();
    });
  });

  describe('amount field', () => {
    it('update and format', () => {
      const amountInputElement = screen.getByTestId('amount') as HTMLInputElement;

      fireEvent.change(amountInputElement, { target: { value: '25000' } }); // set initial unformatted value
      expect(amountInputElement.value).toBe('25,000'); // expect to be formatted

      fireEvent.change(amountInputElement, { target: { value: amountInputElement.value + '0' } }); // increase value
      expect(amountInputElement.value).toBe('250,000'); // expect value to be reformatted

      fireEvent.change(amountInputElement, { target: { value: 1234.56 } }); // set float value
      expect(amountInputElement.value).toBe('1,234.56'); // expected to be formatted

      fireEvent.change(amountInputElement, { target: { value: 1234.56 } }); // copy & past
      expect(amountInputElement.value).toBe('1,234.56'); // expected to be formatted
    });

    it('paste and format', async () => {
      const amountInputElement = screen.getByTestId('amount') as HTMLInputElement;
      const user = userEvent.setup();

      await user.click(amountInputElement);
      await user.paste('123456'); // paste unformatted value
      expect(amountInputElement.value).toBe('123,456'); // expected to be formatted

      await user.clear(amountInputElement);
      await user.paste('$ 1,234.56'); // paste wrong formatted value
      expect(amountInputElement.value).toBe('1,234.56'); // expected to be formatted
    });
  });

  describe('date field', () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1); // always start with next month
    const expectedMonth = () => date.toLocaleDateString('en', { month: 'long' });
    const expectedYear = () => date.getFullYear().toString();

    it('render dynamic month and year', () => {
      const monthTextElement = screen.getByTestId('month');
      expect(monthTextElement).toBeInTheDocument();
      expect(monthTextElement).toHaveTextContent(expectedMonth());

      const yearTextElement = screen.getByTestId('year');
      expect(yearTextElement).toBeInTheDocument();
      expect(yearTextElement).toHaveTextContent(expectedYear());
    });

    it('update month and year by clicking the buttons', async () => {
      const monthTextElement = screen.getByTestId('month');
      const yearTextElement = screen.getByTestId('year');
      const nextMonthButtonElement = screen.getByTestId('nextMonth');
      const previousMonthButtonElement = screen.getByTestId('previousMonth');
      const user = userEvent.setup();

      date.setMonth(date.getMonth() + 1);
      await user.click(nextMonthButtonElement);
      expect(monthTextElement).toHaveTextContent(expectedMonth());
      expect(yearTextElement).toHaveTextContent(expectedYear());

      date.setMonth(date.getMonth() - 1);
      await user.click(previousMonthButtonElement);
      expect(monthTextElement).toHaveTextContent(expectedMonth());
      expect(yearTextElement).toHaveTextContent(expectedYear());
    });

    it('update month and year by typing the Left and Right arrow keys', () => {
      const monthTextElement = screen.getByTestId('month');
      const yearTextElement = screen.getByTestId('year');
      const dateInputElement = screen.getByTestId('reachDate');

      // Arrow Right
      fireEvent.keyDown(dateInputElement, { keyCode: '39' });

      date.setMonth(date.getMonth() + 1);
      expect(monthTextElement).toHaveTextContent(expectedMonth());
      expect(yearTextElement).toHaveTextContent(expectedYear());

      // Arrow Left
      fireEvent.keyDown(dateInputElement, { keyCode: '37' });

      date.setMonth(date.getMonth() - 1);
      expect(monthTextElement).toHaveTextContent(expectedMonth());
      expect(yearTextElement).toHaveTextContent(expectedYear());
    });

    it('only allow future months', async () => {
      const monthTextElement = screen.getByTestId('month');
      const yearTextElement = screen.getByTestId('year');
      const nextMonthButtonElement = screen.getByTestId('nextMonth');
      const previousMonthButtonElement = screen.getByTestId('previousMonth');
      const user = userEvent.setup();

      // disabled by default
      expect(previousMonthButtonElement).toBeDisabled();

      date.setMonth(date.getMonth() + 1);
      await user.click(nextMonthButtonElement);
      expect(monthTextElement).toHaveTextContent(expectedMonth());
      expect(yearTextElement).toHaveTextContent(expectedYear());

      // enable after clicking next month
      expect(previousMonthButtonElement).not.toBeDisabled();

      date.setMonth(date.getMonth() - 1);
      await user.click(previousMonthButtonElement);
      expect(monthTextElement).toHaveTextContent(expectedMonth());
      expect(yearTextElement).toHaveTextContent(expectedYear());

      // disable after clicking back to previous month
      expect(previousMonthButtonElement).toBeDisabled();

      // keep showing the same month and year
      await user.click(previousMonthButtonElement);
      expect(monthTextElement).toHaveTextContent(expectedMonth());
      expect(yearTextElement).toHaveTextContent(expectedYear());
    });
  });

  describe('result info', () => {
    it('show after typing', async () => {
      const resultInfoElement = screen.getByTestId('resultInfo');
      const amountInputElement = screen.getByTestId('amount') as HTMLInputElement;

      // first it's hidden
      expect(resultInfoElement).not.toBeVisible();

      fireEvent.change(amountInputElement, { target: { value: '25000' } });

      // then it turns visible
      expect(resultInfoElement).toBeVisible();
    });

    it('calculate correct monthly amount / deposit', async () => {
      const monthlyAmountElement = screen.getByTestId('monthlyAmount');
      const monthsDiffElement = screen.getByTestId('monthsDiff');
      const amountInputElement = screen.getByTestId('amount') as HTMLInputElement;
      const nextMonthButtonElement = screen.getByTestId('nextMonth');
      const user = userEvent.setup();

      await user.type(amountInputElement, '1000'); // $1,000
      await user.click(nextMonthButtonElement); // next month + 1 = 2 months

      // then it turns visible
      expect(monthlyAmountElement).toHaveTextContent('$500.00');
      expect(monthsDiffElement).toHaveTextContent('2');

      await user.click(nextMonthButtonElement); // 2 months + 1 = 3 months

      // then it turns visible
      expect(monthlyAmountElement).toHaveTextContent('$333.33');
      expect(monthsDiffElement).toHaveTextContent('3');
    });
  });
});
