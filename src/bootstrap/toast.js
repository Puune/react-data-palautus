import React, {useState, useEffect} from 'react'
import { Toast } from 'react-bootstrap'

const MyToast = ({info}) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if(info != null) setShow(true);
    }, [info])

    return (
        <Toast
            delay={3000}
            autohide={true}
            show={show}
            onClose={() => setShow(false)}
        >
            <Toast.Body
                style={toastStyle}
            >
                {info}
            </Toast.Body>
        </Toast>
    )
}

export default MyToast;

const toastStyle = {
    color: '#2A4040'
}