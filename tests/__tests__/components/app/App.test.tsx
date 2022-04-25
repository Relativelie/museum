import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import App from '../../../../src/components/app/App';

describe('App component', () => {
    test('snapshot - app component', () => {
        const renderer = ShallowRenderer.createRenderer();
        renderer.render(<App />);
        const tree = renderer.getRenderOutput();
        expect(tree).toMatchSnapshot();
    });
});
