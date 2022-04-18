import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { act, create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/dom';

import { Email } from '../../../../../src/components/feedback/email/Email';

describe('Feedback - Email component', () => {
    test('snapshot - email component', () => {
        let root: any;
        act(() => {
            root = create(<Email />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('change email value with enter press - correct value', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, 'test@test.test');
        expect(screen.getByTestId('form-field-email')).toHaveValue('test@test.test');
        fireEvent.keyPress(screen.getByTestId('form-field-email'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input');
    });

    test('change email value with blur activate - correct value', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, 'correct.@correct.ty');
        expect(screen.getByTestId('form-field-email')).toHaveValue('correct.@correct.ty');
        userEvent.tab();
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input');
    });

    test('change email value with enter press - incorrect value: without part of domain name', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, 'test@test.');
        expect(screen.getByTestId('form-field-email')).toHaveValue('test@test.');
        fireEvent.keyUp(screen.getByTestId('form-field-email'), { key: 'Enter', code: 13 });
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change email value with blur activate - incorrect value: without domain name', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, 'test@');
        expect(screen.getByTestId('form-field-email')).toHaveValue('test@');
        userEvent.tab();
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change email value with enter press - incorrect value: without unique user name', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, '@test.test');
        expect(screen.getByTestId('form-field-email')).toHaveValue('@test.test');
        fireEvent.keyUp(screen.getByTestId('form-field-email'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change email value with blur activate - incorrect value: without at sign', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, 'testtest.test');
        expect(screen.getByTestId('form-field-email')).toHaveValue('testtest.test');
        userEvent.tab();
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change email value with blur activate - empty value', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.click(inputEl);
        expect(screen.getByTestId('form-field-email')).toHaveValue('');
        userEvent.tab();
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('change email value with enter press - incorrect value: only spaces', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, '     ');
        expect(screen.getByTestId('form-field-email')).toHaveValue('');
        fireEvent.keyUp(screen.getByTestId('form-field-email'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
    });

    test('add incorrect value, then add correct value', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, 'freef');
        fireEvent.keyPress(screen.getByTestId('form-field-email'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
        userEvent.type(inputEl, 'test@test.test');
        userEvent.tab();
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input');
    });

    test('add correct value, then add incorrect value', () => {
        render(<Email />);
        const inputEl = screen.getByTestId('form-field-email');
        userEvent.type(inputEl, 'test@test.test');
        userEvent.tab();
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input');
        userEvent.type(inputEl, 'f');
        fireEvent.keyPress(screen.getByTestId('form-field-email'), { key: 'Enter', code: 'Enter', charCode: 0 });
        expect(screen.getByTestId('form-field-email')).toHaveClass('feedback_input incorrectInputValue');
    });
});
