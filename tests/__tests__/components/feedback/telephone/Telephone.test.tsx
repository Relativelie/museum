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
        expect(inputEl).toHaveValue('1 (23');
    });

    test('change tel number to a string value', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, 'dfvdv');
        expect(inputEl).toHaveValue('');
    });

    test('change tel number to a numeric value with length === 11 and press enter', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '12345678901');
        fireEvent.keyUp(inputEl, { key: 'Enter', code: 13 });
        expect(inputEl).toHaveClass('feedback_input');
        expect(inputEl).toHaveValue('1 (234)-567-89-01');
    });

    test('change tel number to a numeric value with length > 11', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '123456789012');
        expect(inputEl).toHaveValue('1 (234)-567-89-01');
    });

    test('change tel number to a numeric value with length < 11 and press enter', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '1234567');
        expect(inputEl).toHaveValue('1 (234)-567');
        fireEvent.keyUp(inputEl, { key: 'Enter', code: 13 });
        expect(inputEl).toHaveClass('feedback_input incorrectInputValue');
        expect(inputEl).toHaveValue('1 (234)-567');
    });

    test('change tel number to a numeric value with length < 11 and unfocused input', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '1234567');
        expect(inputEl).toHaveValue('1 (234)-567');
        userEvent.tab();
        expect(inputEl).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change tel value to empty value', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.click(inputEl);
        expect(inputEl).toHaveValue('');
        userEvent.tab();
        expect(inputEl).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change tel value to incorrect value: only spaces', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '     ');
        expect(inputEl).toHaveValue('');
        fireEvent.keyUp(inputEl, { key: 'Enter', code: 13 });
        expect(inputEl).toHaveClass('feedback_input incorrectInputValue');
    });

    test('add incorrect value, then add correct value', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '1234567');
        fireEvent.keyUp(inputEl, { key: 'Enter', code: 13 });
        expect(inputEl).toHaveClass('feedback_input incorrectInputValue');
        userEvent.type(inputEl, '12345678901');
        userEvent.tab();
        expect(inputEl).toHaveClass('feedback_input');
    });

    test('add correct value, then add incorrect value', () => {
        render(<Telephone />);
        const inputEl = screen.getByTestId('form-field-tel');
        userEvent.type(inputEl, '12345678901');
        userEvent.tab();
        expect(inputEl).toHaveClass('feedback_input');
        userEvent.clear(inputEl);
        userEvent.type(inputEl, '14567');
        userEvent.tab();
        expect(inputEl).toHaveClass('feedback_input incorrectInputValue');
    });
});
