import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import { Feedback } from '../../../../src/components/feedback/Feedback';

describe('Feedback - Feedback component', () => {
    test('snapshot - Feedback component', () => {
        const renderer = ShallowRenderer.createRenderer();
        renderer.render(<Feedback />);
        const tree = renderer.getRenderOutput();
        expect(tree).toMatchSnapshot();
    });
});
