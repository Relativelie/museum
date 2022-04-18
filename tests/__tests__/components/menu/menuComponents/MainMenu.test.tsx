import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import { act, create } from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { menuContent } from '../../../../../src/components/menu/menuComponents/content';
import { MainMenu } from '../../../../../src/components/menu/menuComponents/MainMenu';

describe('Main menu component', () => {
    test('snapshot - main active menu', () => {
        const someFunc = jest.fn();
        let root: any;
        act(() => {
            root = create(<MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={1002}
                mobMenuClosed="menuMobileContainer_isClose"
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
                mobMenuClosed="menuMobileContainer_isClose"
            />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });

    test('click on the menu item two times', () => {
        const someFunc = jest.fn();
        render(
            <MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={-1}
                mobMenuClosed="menuMobileContainer_isClose"
            />,
        );
        userEvent.click(screen.getByText(/пункт 2/i));
        userEvent.click(screen.getByText(/пункт 2/i));
        expect(someFunc).toHaveBeenCalledTimes(2);
    });

    test('click on the menu item once', () => {
        const someFunc = jest.fn();
        render(
            <MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={-1}
                mobMenuClosed="menuMobileContainer_isClose"
            />,
        );
        userEvent.click(screen.getByText(/пункт 2/i));
        expect(someFunc).toHaveBeenCalledTimes(1);
    });

    test('key press on the menu item once', () => {
        const someFunc = jest.fn();
        render(
            <MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={-1}
                mobMenuClosed="menuMobileContainer_isClose"
            />,
        );
        fireEvent.keyPress(screen.getByText(/пункт 2/i), { key: '0', code: 'Digit0', charCode: 48 });
        expect(someFunc).toHaveBeenCalledTimes(1);
    });

    test('key press on the menu item once', () => {
        const someFunc = jest.fn();
        render(
            <MainMenu
                content={menuContent}
                changeSubmenuVisible={someFunc}
                activeMenuId={-1}
                mobMenuClosed="menuMobileContainer_isClose"
            />,
        );
        fireEvent.keyPress(screen.getByText(/пункт 2/i), { key: '0', code: 'Digit0', charCode: 48 });
        fireEvent.keyPress(screen.getByText(/пункт 2/i), { key: '0', code: 'Digit0', charCode: 48 });
        expect(someFunc).toHaveBeenCalledTimes(2);
    });
});
