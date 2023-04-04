import React from 'react'
import Container from 'react-bootstrap/Container'

class Body extends React.Component {
    render() {
        return (
            <Container fluid>
                {this.props.children}
            </Container>
        )
    }
}

export default Body