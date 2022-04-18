import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { act, create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/dom';
import { Telephone } from '../../../../../src/components/feedback/telephone/Telephone';

describe('Feedback - Telephone component', () => {
    test('snapshot - telephone component', () => {
        let root: any;
        act(() => {
            root = create(<Telephone />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('change tel value to a numeric value', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '123');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('123');
    });

    test('change tel number to a string value', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, 'dfvdv');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('');
    });

    test('change tel number to a numeric value with length === 11 and press enter', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '12345678901');
        fireEvent.keyPress(screen.getByTestId('form-field-tel'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-tel')).toHaveClass('feedback_input');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('12345678901');
    });

    test('change tel number to a numeric value with length > 11', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '123456789012');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('12345678901');
    });

    test('change tel number to a numeric value with length < 11 and press enter', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '1234567');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('1234567');
        fireEvent.keyPress(screen.getByTestId('form-field-tel'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-tel')).toHaveClass('feedback_input incorrectInputValue');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('1234567');
    });

    test('change tel number to a numeric value with length < 11 and unfocused input', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '1234567');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('1234567');
        userEvent.tab();
        expect(screen.getByTestId('form-field-tel')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change input value with blur activate - empty value', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.click(inputEl);
        expect(screen.getByTestId('form-field-tel')).toHaveValue('');
        userEvent.tab();
        expect(screen.getByTestId('form-field-tel')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change input value with enter press - incorrect value: only spaces', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '1234567');
        expect(screen.getByTestId('form-field-tel')).toHaveValue('');
        fireEvent.keyPress(screen.getByTestId('form-field-tel'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-tel')).toHaveClass('feedback_input incorrectInputValue');
    });
});
