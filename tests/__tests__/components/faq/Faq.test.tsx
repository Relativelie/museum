import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, create } from 'react-test-renderer';
import { screen } from '@testing-library/dom';
import { Faq } from '../../../../src/components/faq/Faq';
import '@testing-library/jest-dom';

import { faqContent } from '../../../../src/components/faq/content';

describe('FAQ component', () => {
    test('snapshot - FAQ component', () => {
        let root: any;
        act(() => {
            root = create(<Faq />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('snapshot - FAQ component', () => {
        render((<Faq />));
        expect(document.querySelector('[open]')).toBeNull();
        userEvent.click(screen.getByText(faqContent[0].question));
        expect(document.querySelector('.faqContent_elem')).toHaveAttribute('open');
    });
});
