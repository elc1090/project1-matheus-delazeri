import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

class Menu extends React.Component {
    static anchors = [
        {
            key: "banner",
            label: "Home"
        },
        {
            key: "about",
            label: "Sobre mim"
        },
        {
            key: "experience",
            label: "Experiência"
        }
    ]
    render() {
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {
                        Menu.anchors.map((anchor) => {
                            return <Nav.Link key={anchor.key} className="link-secondary" href={"#" + anchor.key}>{anchor.label}</Nav.Link>
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        )
    }
}

export default Menu;