import { useState } from "react"
import { useEffect } from "react"

export const SubMenu = ({ content, activeMenuElem, isActive }: any) => {
    const [inactiveEl, setInactiveEl] = useState("");

    useEffect(() => {
        if (!isActive) {
            setInactiveEl("subMenu_inactive")
        }
        else setInactiveEl("")
    }, [isActive])


    return (
        <div className={`subMenu ${inactiveEl}`}>
            <div className="subMenuContent">
                {content.map(((elem: any) => {
                    if (elem.id === activeMenuElem) {
                        return elem.content.map((item: string, index: number) => {

                            return (
                                <li className="subMenuContent_elem" key={`menu-${index}`}>
                                    {item[0]}
                                </li>
                            )
                        })
                    }
                }))}
            </div>

        </div>

    )
}