import { useState, useEffect } from 'react';

export const Submenu = ({ content, activeMenuElem, isActive }: any) => {
    const [inactiveEl, setInactiveEl] = useState('Submenu_inactive');

    useEffect(() => {
        if (!isActive && inactiveEl !== 'Submenu_inactive') setInactiveEl('Submenu_inactive');
        else setInactiveEl('');
    });

    return (
        <div className={`Submenu ${inactiveEl}`}>
            <div className="SubmenuContent">
                {content.map(((elem: any) => {
                    if (elem.id === activeMenuElem) {
                        return elem.content.map(((contentElem: any) => {
                            return (
                                <li className="SubmenuContent_elem" key={`Submenu-${contentElem.id}`}>
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
