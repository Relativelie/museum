import logo from '../../../assets/images/menu/logo.png';

export const MainMenu = ({ children, content, changeSubmenuVisible, activeMenuId }: any) => {
    return (
        <div className="mainMenu">
            <img className="logo" src={logo} alt="logo" />
            <ul className="mainMenuContent">
                {content.map(((elem: any) => {
                    const { name, id } = elem;
                    let activeEl = '';
                    let isActiveChildren = null;
                    if (id === activeMenuId) {
                        activeEl = 'mainMenuContent_active';
                        isActiveChildren = children;
                    } else {
                        isActiveChildren = null;
                    }
                    return (
                        <div className={`mainMenuContent_container${activeEl}`} key={`menu-${id}`}>
                            <li
                                className="mainMenuContent_elem"
                                data-elem={`${id}`}
                                onClick={(e) => changeSubmenuVisible(e)}
                                onKeyPress={(e) => changeSubmenuVisible(e)}
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
