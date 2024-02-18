import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css';

export interface MapPageProps { }

const MapPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "Sua chave API Google"
    })

    const position = {
        lat: -29.966174,
        lng: -50.117741
    }

    return (
        <div className="map">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={position}
                    zoom={15}
                >
                    <Marker position={position} options={{
                        label: {
                            text: "Morando na Praia",
                            className: "map-position"
                        }
                    }}
                    />
                </GoogleMap>
            ) : <></>}
        </div>
    )
}

export default MapPage