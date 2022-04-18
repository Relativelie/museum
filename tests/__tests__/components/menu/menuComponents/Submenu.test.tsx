import { create, act } from 'react-test-renderer';
import { menuContent } from '../../../../../src/components/menu/menuComponents/content';
import { Submenu } from '../../../../../src/components/menu/menuComponents/Submenu';

describe('Submenu component', () => {
    test('snapshot - submenu active', () => {
        let root: any;
        act(() => {
            root = create(<Submenu content={menuContent} activeMenuElem={1002} isActive />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('snapshot - submenu non-active', () => {
        let root: any;
        act(() => {
            root = create(<Submenu content={menuContent} activeMenuElem={1002} isActive={false} />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });
});
