import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import L, { LatLng } from 'leaflet'
import icon from 'Components/filler/icon'
import "Styles/App.css";


export default function MapComponent({ page }) {

    const mapMarkers = (markers) => {
        if(!markers) return null
        else {
            return(
                page.items.slice(page.number*10, page.number*10+10).map(mark => (
                    <Marker 
                        icon={icon}
                        key={mark.id}
                        position={[
                            mark.latitude,
                            mark.longitude
                        ]}
                    />
                ))
            )
        }
    }

    return (
        <Map center={[60.1709, 24.9395]} zoom={10} id="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            { mapMarkers(page)}
        </Map>
    );
}