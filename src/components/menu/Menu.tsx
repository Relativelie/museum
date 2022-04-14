import { useState, useEffect } from 'react';

import { menuContent } from './menuComponents/content';
import { MainMenu } from './menuComponents/MainMenu';
import { Submenu } from './menuComponents/Submenu';

import openButton from '../../assets/images/menu/open.png';
import closeButton from '../../assets/images/menu/close.png';
import './Menu.scss';

export const Menu = () => {
    const [content] = useState(menuContent);
    const [isActive, setIsActive] = useState(false);
    const [activeMenuId, setActiveMenuId] = useState(-1);

    // For mobile.
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [openCloseImg, setOpenCloseImg] = useState(openButton);
    const [mobMenuBtnClass, setMobMenuBtnClass] = useState('menuMobileButtons_open');
    const [mobMenuContainerClass, setMobMenuContainerClass] = useState('menuMobileContainer_closed');

    useEffect(() => {
        if (menuIsOpen) {
            setOpenCloseImg(closeButton);
            setMobMenuBtnClass('menuMobileButtons_close');
            setMobMenuContainerClass('');
        } else {
            setOpenCloseImg(openButton);
            setMobMenuBtnClass('menuMobileButtons_open');
            setMobMenuContainerClass('menuMobileContainer_closed');
        }
    }, [menuIsOpen]);

    const changeSubmenuVisible = (e: any) => {
        const clickedMenuItem = parseInt(e.target.dataset.elem, 10);
        if (clickedMenuItem === activeMenuId) openSubmenu();
        else closeSubmenu(clickedMenuItem);
    };

    const openSubmenu = () => {
        setIsActive(false);
        setActiveMenuId(-1);
    };

    const closeSubmenu = (clickedMenuItem: number) => {
        setActiveMenuId(clickedMenuItem);
        setIsActive(true);
    };

    const showMobMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <div className="menu">
            <nav className="menu_nav">
                <div className="menu_nav_components">
                    <MainMenu
                        content={content}
                        changeSubmenuVisible={changeSubmenuVisible}
                        activeMenuId={activeMenuId}
                        mobMenuClosed={mobMenuContainerClass}
                    >
                        <Submenu
                            content={content}
                            activeMenuElem={activeMenuId}
                            isActive={isActive}
                        />
                    </MainMenu>
                </div>
                <img
                    className={`menuMobileButtons ${mobMenuBtnClass}`}
                    onClick={showMobMenu}
                    onKeyPress={showMobMenu}
                    role="menuitem"
                    tabIndex={0}
                    src={openCloseImg}
                    alt="menu button"
                />
            </nav>
        </div>
    );
};
