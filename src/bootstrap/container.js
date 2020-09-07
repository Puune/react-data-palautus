import React from 'react'

import Container from 'react-bootstrap/Container'

const MyContainer = (props) => {
    return(
        <Container style={props.style} >
            {props.children}
        </Container>
    )
}

export default MyContainer;