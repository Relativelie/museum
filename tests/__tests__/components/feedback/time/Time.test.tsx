import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

import { Time } from '../../../../../src/components/feedback/time/Time';

describe('Feedback - Time component', () => {
    test('change time value', () => {
        render(<Time />);
        const inputEl = screen.getByTestId('form-field-time');
        userEvent.type(inputEl, '20:33');
        expect(screen.getByTestId('form-field-time')).toHaveValue('20:33');
    });
});
