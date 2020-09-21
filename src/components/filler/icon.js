import React from 'react'
import L from 'leaflet'
import marker from 'Img/marker-icon.png'
import shadow from 'Img/marker-shadow.png'

console.log(marker)

const icon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [30, 55],
    shadowUrl: shadow,
    shadowSize: [68, 95],
    shadowAnchor: [20, 92]
})

export default icon