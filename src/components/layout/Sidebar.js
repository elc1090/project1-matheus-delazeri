import React from "react";
import Menu from "./Menu"

const Sidebar = () => {
    const floatX = "right"
    return (
        <>
            <div className="sidebar" style={{float: floatX}}>
                {
                Menu.anchors.map(function(containerId, key) {
                    return <a key={key} href={"#"+containerId} className="sidebar__item">casc</a>
                })
                }
            </div>
        </>
    )
}

export default Sidebar