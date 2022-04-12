import logo from '../../../assets/images/logo.png';


export const MainMenu = ({ content, changeSubMenuVisible, activeMenuId }: any) => {
    return (
        <div className='mainMenu'>
            <div className='mainMenu_container'>
                <img className="logo" src={logo} alt="logo" />
                <ul className='mainMenuContent'>
                    {content.map(((elem: any) => {
                        const { name, id } = elem;
                        let activeEl = "";
                        if (id === activeMenuId) {
                            activeEl = "mainMenuContent_active"
                        }
                        return (
                            <li
                                className={`mainMenuContent_elem ${activeEl}`}
                                key={`menu-${id}`} data-elem={`${id}`}
                                onClick={(e) => changeSubMenuVisible(e)}
                            >
                                {name}
                            </li>
                        )
                    }))}
                </ul>
            </div>

        </div>

    )
}