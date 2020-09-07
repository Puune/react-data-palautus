import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'

const MyContainer = (props) => {
    return(
        <Container style={props.style} >
            {props.children}
        </Container>
    )
}

export default MyContainer;