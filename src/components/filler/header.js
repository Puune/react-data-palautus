import React from 'react'

const Header = ({title, subtitle, style}) => {
    return(
        <div style={style}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </div>
    )
}

export default Header;

