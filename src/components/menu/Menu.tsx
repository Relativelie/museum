import { useState } from "react";

import { menuContent } from "./menuComponents/menuContent";
import { MainMenu } from "./menuComponents/MainMenu";
import { SubMenu } from "./menuComponents/SubMenu";

import "./Menu.scss";


export const Menu = () => {
    const [content] = useState(menuContent);
    const [isActive, setIsActive] = useState(false);
    const [activeMenuId, setActiveMenuId] = useState(-1);


    const changeSubMenuVisible = (e: any) => {
        const clickedMenuItem = parseInt(e.target.dataset.elem) 
        if (clickedMenuItem === activeMenuId) {
            setIsActive(false)
            setActiveMenuId(-1);
        }
        else {
            setActiveMenuId(clickedMenuItem);
            setIsActive(true)
        }
    }



        return (
            <div className="menu">
                <nav>
                    <MainMenu content={content} changeSubMenuVisible={changeSubMenuVisible} activeMenuId={activeMenuId} />
                    <SubMenu content={content} activeMenuElem={activeMenuId} isActive={isActive}/>
                </nav>
            </div>
        )

}
