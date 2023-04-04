import React from 'react'
import { Image, Container } from 'react-bootstrap';

import profileImg from "assets/images/profile.png"

class Banner extends React.Component {
    render() {
        return (
            <Container className="banner shadow-sm" id="banner" fluid>
                <div className="banner__info">
                    <h3 className="container__title">Calíope Liana Vianna Pydd</h3>
                    <p className="banner__contact"><i className="fa fa-envelope" /> exemplo@gmail.com</p>
                    <p className="banner__contact"><i className="fa fa-phone" /> (55) 99964-2150</p>
                </div>
                <Image className="banner__profileImg" src={profileImg} />
            </Container>
        );
    }
}

export default Banner