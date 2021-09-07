import React from 'react'
import Header from '../Header/header'
function layout(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default layout
