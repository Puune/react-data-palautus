import React from 'react'
import ReactDOM from 'react-dom'
import json from './tyontekijat.json'

import Header from 'Components/filler/header'

export default function Example() {

    /*
    const data = Object.values(json.tyontekijat);
    console.log(data);

    function myFunction(arr) { // 5
     var out = "";
     var i;
     for(i = 0; i < arr.length; i++) {
     out += arr[i].firstName + " " +
     arr[i].lastName ;
     }
    document.getElementById("duunarit").innerHTML = out.toString(); // 6
    }

    myFunction(data)

    return (
        <div>
            <div id="duunarit"></div>
        </div>
    )
    */
   const makeList = (list) => {
    return list.map(element => {
      let homenumber, mobilenumber;
      if(element.homenumber!=null){
        homenumber = 'Home number:' + element.homenumber;
      }
      if(element.mobilenumber!=null){
        mobilenumber = 'Mobile number:' + element.mobilenumber;
      }

      return <li style={listStyle} key={element.firstName + element.lastname}>
        <p>Name: {element.firstName + " " + element.lastName}</p>
        <p>Address: {element.address}</p>
        <p>{homenumber}</p>
        <p>{mobilenumber}</p>
      </li>
    })
  }

return (
<div>
    <Header title={"Tehtävät 1"}/>
    <ul>
        {makeList(json.tyontekijat)}
  </ul>
</div>
)
}

const listStyle = {
  borderTop: '2px solid black',
  borderBottom: '2px solid black'
}