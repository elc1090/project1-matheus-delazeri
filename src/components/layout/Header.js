import React, {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Menu from './Menu'

import logo from 'assets/images/logo.png'

const Header = () => {

    const [y, setY] = useState(window.scrollY)

    const handleShadow = (scrollY) => {
        setY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleShadow(window.scrollY))

        return () => {
            window.removeEventListener("scroll", (e) => handleShadow(window.scrollY));
        };
    }, [y])

    return (
        <Navbar fixed='top' expand="lg" className={`${y > 0 ? "shadow-sm" : ""}`}>
            <Image style={{ width: "4rem" }} src={logo}></Image>
            <Navbar.Toggle variant="primary" aria-controls="basic-navbar-nav" />
            <Menu />
        </Navbar>
    )
}

export default Header;