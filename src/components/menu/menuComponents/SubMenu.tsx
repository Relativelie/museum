import { useState, useEffect } from 'react';

export const Submenu = ({ content, activeMenuElem, isActive }: any) => {
    const [inactiveEl, setInactiveEl] = useState('submenu_inactive');

    useEffect(() => {
        if (!isActive && inactiveEl !== 'submenu_inactive') setInactiveEl('submenu_inactive');
        else setInactiveEl('');
    });

    return (
        <div className={`submenu ${inactiveEl}`}>
            <div className="submenuContent">
                {content.map(((elem: any) => {
                    if (elem.id === activeMenuElem) {
                        return elem.content.map(((contentElem: any) => {
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
