import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { act, create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { Date } from '../../../../../src/components/feedback/date/Date';

describe('Feedback - Date component', () => {
    test('snapshot - date component', () => {
        let root: any;
        act(() => {
            root = create(<Date />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('change date value', () => {
        render(<Date />);
        const inputEl = screen.getByTestId('form-field-date');
        userEvent.type(inputEl, '2022-04-01');
        expect(screen.getByTestId('form-field-date')).toHaveValue('2022-04-01');
    });
});
