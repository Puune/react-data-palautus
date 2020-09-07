import React, {useState, useEffect} from 'react'
import Toast from 'Bootstrap/toast'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Switcher = (props) => {
    const[viewIndex, setViewIndex] = useState(0)
    const[children, setChildren] = useState([])
    const[toastInfo, setToastInfo] = useState()

    useEffect(() => {
        setChildren( (Array.isArray(props.children) ? props.children : [props.children]))
    }, [props.children])

    useEffect(() => {
        setView(viewIndex)
    }, [viewIndex])

    const setView = (ind) => {
        if(children[ind]!=null){
            return(
                children[ind]
            )
        } else {
            return <div />
        }
    }

    const toast = (info) => {
        setToastInfo(info);
    }

    const increment = () => { (children.length-1!=viewIndex) ? setViewIndex(viewIndex + 1) : toast("Already on last element")}
    const subtract = () => { (0 != viewIndex) ? setViewIndex(viewIndex - 1) : toast("Already on first element")}
    const getIndex = () => {return(
        <h4>{viewIndex+1}{' out of '}{children.length}</h4>
    )}
    return (
        <div>
            <>{getIndex()}</>
            <Toast info={toastInfo}/>
            <Button style={props.style.button} onClick={() => subtract()}>Previous</Button>
            <Button style={props.style.button} onClick={() => increment()}>Next</Button>       
            <div style={props.style}>{children[viewIndex]}</div>
        </div>
    )
}

export default Switcher;