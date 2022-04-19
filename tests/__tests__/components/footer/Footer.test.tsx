import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { act, create } from 'react-test-renderer';

import { Footer } from '../../../../src/components/footer/Footer';

describe('Feedback - Time component', () => {
    test('snapshot - time component', () => {
        let root: any;
        act(() => {
            root = create(<Footer />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });
});
