import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { act, create } from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Menu } from '../../../../src/components/menu/Menu';
import { menuContent } from '../../../../src/components/menu/menuComponents/content';

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
        userEvent.click(screen.getByText(menuContent[0].name));
        expect(screen.getByText(menuContent[0].content[0].text)).toBeInTheDocument();
    });

    test('snapshot - open and close submenu', () => {
        render(<Menu />);
        userEvent.click(screen.getByText(menuContent[1].name));
        expect(screen.getByText(menuContent[1].content[1].text)).toBeInTheDocument();
        userEvent.click(screen.getByText(menuContent[1].name));
        expect(screen.queryByText(menuContent[1].content[1].text)).toBeNull();
    });

    test('snapshot - adding mobile menu classes correctly', () => {
        render(<Menu />);
        expect(screen.getByAltText(/menu button/i)).toHaveClass('menuMobileButtons menuMobileButtons_toOpen');
        expect(document.querySelector('.mainMenuContent')).toHaveClass('mainMenuContent menuMobileContainer_isClose');
        userEvent.click(screen.getByAltText(/menu button/i));
        expect(screen.getByAltText(/menu button/i)).toHaveClass('menuMobileButtons menuMobileButtons_toClose');
        expect(document.querySelector('.mainMenuContent')).toHaveClass('mainMenuContent');
    });
});
