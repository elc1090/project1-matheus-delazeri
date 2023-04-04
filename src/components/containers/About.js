import React from 'react'
import { Container } from 'react-bootstrap';


import Example from "components/Example"

class About extends React.Component {
    render() {
        return (
            <Container className="about" id="about" fluid>
                <div className="about__info">
                    <h3 className="container__title">Sobre mim</h3>
                    <Example />
                </div>
            </Container>
        );
    }
}

export default About