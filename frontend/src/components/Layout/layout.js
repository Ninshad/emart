import React from 'react'
// import {Container} from "react-bootstrap";
import Header from '../Header/header'

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
           
        </>
    )
}

export default Layout
