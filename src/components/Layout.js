import React from 'react'
import Header from './layout/Header'
import Body from './layout/Body'
import Sidebar from './layout/Sidebar'
import Footer from './layout/Footer'

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Body>
                    <Sidebar />
                    {this.props.children}
                </Body>
                <Footer />
            </>
        )
    }
}

export default Layout