import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { act, create } from 'react-test-renderer';
import { Menu } from '../../../src/components/menu/Menu';
import { menuContent } from '../../../src/components/menu/menuComponents/content';



describe('Menu component', () => {
    test('snapshot - menu component without open submenu', () => {
        let root: any;
        act(() => {
            root = create(<Menu />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('snapshot - open submenu', () => {
        render(<Menu />);
        fireEvent.click(screen.getByText(menuContent[0].name));
        expect(screen.getByText(menuContent[0].content[0].text)).toBeInTheDocument();
    });

    test('snapshot - open and close submenu', () => {
        render(<Menu />);
        fireEvent.click(screen.getByText(menuContent[1].name));
        expect(screen.getByText(menuContent[1].content[1].text)).toBeInTheDocument();
        fireEvent.click(screen.getByText(menuContent[1].name));
        expect(screen.queryByText(menuContent[1].content[1].text)).toBeNull();
    });

    test('snapshot - show mobile menu(menu use effect)', () => {
        render(<Menu />);
        fireEvent.click(screen.getByText(menuContent[1].name));
        expect(screen.getByText(menuContent[1].content[1].text)).toBeInTheDocument();
        fireEvent.click(screen.getByText(menuContent[1].name));
        expect(screen.queryByText(menuContent[1].content[1].text)).toBeNull();
    });
});
