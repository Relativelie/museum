import logo from '../../../assets/images/logo.png';

export const MainMenu = ({ content, changeSubMenuVisible, activeMenuId }: any) => {
    return (
        <div className="mainMenu">
            <img className="logo" src={logo} alt="logo" />
            <ul className="mainMenuContent">
                {content.map(((elem: any) => {
                    const { name, id } = elem;
                    let activeEl = '';
                    if (id === activeMenuId) {
                        activeEl = 'mainMenuContent_active';
                    }
                    return (
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <li
                            className={`mainMenuContent_elem ${activeEl}`}
                            key={`menu-${id}`}
                            data-elem={`${id}`}
                            onClick={(e) => changeSubMenuVisible(e)}
                            onKeyPress={(e) => changeSubMenuVisible(e)}
                            role="menuitem"
                            tabIndex={0}
                        >
                            {name}
                        </li>
                    );
                }))}
            </ul>
        </div>
    );
};
