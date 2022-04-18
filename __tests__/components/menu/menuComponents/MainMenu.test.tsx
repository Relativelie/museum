import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { act, create } from 'react-test-renderer';
import { menuContent } from '../../../../src/components/menu/menuComponents/content';
import { MainMenu } from '../../../../src/components/menu/menuComponents/MainMenu';

describe('Main menu component', () => {
    test('snapshot - main active menu', () => {
        const someFunc = jest.fn();
        let root: any;
        act(() => {
            root = create(<MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={1002}
                mobMenuClosed="menuMobileContainer_closed"
            />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });
    test('snapshot - main non-active menu', () => {
        const someFunc = jest.fn();
        let root: any;
        act(() => {
            root = create(<MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={-1}
                mobMenuClosed="menuMobileContainer_closed"
            />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('click on the menu item', () => {
        const someFunc = jest.fn();
        render(
            <MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={-1}
                mobMenuClosed="menuMobileContainer_closed"
            />,
        );
        fireEvent.click(screen.getByText(/пункт 2/i));
        fireEvent.click(screen.getByText(/пункт 2/i));
        expect(someFunc).toHaveBeenCalledTimes(2);
    });

    test('key press on the menu item', () => {
        const someFunc = jest.fn();
        render(
            <MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={-1}
                mobMenuClosed="menuMobileContainer_closed"
            />,
        );
        fireEvent.keyPress(screen.getByText(/пункт 2/i), { key: '0', code: 'Digit0', charCode: 48 });
        expect(someFunc).toHaveBeenCalledTimes(1);
    });
});
