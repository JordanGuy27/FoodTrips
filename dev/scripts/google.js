import React from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends React.Component {
render() {
    return (
        <Map google={this.props.google} zoom={8}>

            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                    {/* <h1>{this.state.selectedPlace.name}</h1> */}
                </div>
            </InfoWindow>
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCNX1tthuQLaX98UVGv2dcbFnpjdhw0TnQ')
})(MapContainer)