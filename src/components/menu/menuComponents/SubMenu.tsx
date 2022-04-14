import { FC, useState, useEffect } from 'react';

interface SubmenuElemType {
    name: string,
    id: number,
    content: ContentElemType[],
}

interface ContentElemType {
    id: number,
    text: string,
    url: string,
}

interface Props {
    content: any[],
    activeMenuElem: number,
    isActive: boolean,
}

export const Submenu: FC<Props> = ({ content, activeMenuElem, isActive }) => {
    const [inactiveEl, setInactiveEl] = useState('submenu_inactive');

    useEffect(() => {
        if (!isActive && inactiveEl !== 'submenu_inactive') setInactiveEl('submenu_inactive');
        else setInactiveEl('');
    }, [isActive, inactiveEl]);

    return (
        <div className={`submenu ${inactiveEl}`}>
            <div className="submenuContent">
                {content.map(((elem: SubmenuElemType) => {
                    if (elem.id === activeMenuElem) {
                        return elem.content.map(((contentElem: ContentElemType) => {
                            return (
                                <li className="submenuContent_elem" key={`submenu-${contentElem.id}`}>
                                    {contentElem.text}
                                </li>
                            );
                        }));
                    } else return null;
                }))}
            </div>
        </div>
    );
};
