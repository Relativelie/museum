import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import { News } from '../../../../src/components/news/News';

describe('Feedback - Feedback component', () => {
    test('snapshot - Feedback component', () => {
        const renderer = ShallowRenderer.createRenderer();
        renderer.render(<News />);
        const tree = renderer.getRenderOutput();
        expect(tree).toMatchSnapshot();
    });
});
