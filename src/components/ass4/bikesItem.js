import React, {useState} from 'react'
import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const BikesItem = ({props}) => {

    const [visible, setVisible] = useState(false)

    const handleClick = (event) => {
        setVisible(!visible);
    }


    return (
        <div>
            <ListGroup.Item 
                style={{color: "black"}} variant="flush"
                key={props.id}
                onClick={(event) => handleClick(event)}
                >
                {props.name} {" - bikes ["} {props.free_bikes} {"/"} {props.free_bikes+props.empty_slots}{"]"}
            </ListGroup.Item>
            <Metadata props={props} visible={visible}/>
        </div>
    )
}
export default BikesItem

const Metadata = ({props, visible}) => {
    if(visible){
        return (
            <div>
                <p>{"Bikes left: "}{props.free_bikes} {" out of "} {props.free_bikes+props.empty_slots} {" total"} </p>
                <p>Latitude: {props.latitude}</p>
                <p>Longitude: {props.longitude}</p>
            </div>
        )
    } else {
        return <></>
    }
}


const subList = {
    backgroundColor: '#545c75',
    marginLeft: '8px',
    minHeight: '40pix'
}