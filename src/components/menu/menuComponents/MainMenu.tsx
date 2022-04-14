import { FC } from 'react';
import logo from '../../../assets/images/menu/logo.png';

interface Props {
    content: any;
    changeSubmenuVisible: Function,
    activeMenuId: number,
    mobMenuClosed: string,
}

interface ContentElemType {
    name: string,
    id: number,
    content: {
        id: number,
        text: string,
        url: string,
    }
}

export const MainMenu: FC<Props> = (props) => {
    return (
    <div className="mainMenu">
        <img className="logo" src={logo} alt="logo" />
        <ul className={`mainMenuContent ${props.mobMenuClosed}`}>
            {props.content.map(((elem: ContentElemType) => {
                const { name, id } = elem;
                let activeEl = '';
                let isActiveChildren = null;
                if (id === props.activeMenuId) {
                    activeEl = 'mainMenuContent_active';
                    isActiveChildren = props.children;
                } else {
                    isActiveChildren = null;
                }
                return (
                    <div className={`mainMenuContent_container ${activeEl}`} key={`menu-${id}`}>
                        <li
                            className="mainMenuContent_elem"
                            data-elem={`${id}`}
                            onClick={(e) => props.changeSubmenuVisible(e)}
                            onKeyPress={(e) => props.changeSubmenuVisible(e)}
                            role="menuitem"
                            tabIndex={0}
                        >
                            {name}
                        </li>
                        {isActiveChildren}
                    </div>
                );
            }))}
        </ul>
    </div>
    );
};
