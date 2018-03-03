import React from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            showingInfoWindow: false, 
            selectedPlace: {},
            activeMarker: {}
        }
        this.markerClick = this.markerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        
    }
    markerClick( props, marker) {
        console.log('hey');
        this.setState ({
            showingInfoWindow: true,
            title: '',
            activeMarker: marker
        })
    }
    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
        console.log('hey');
    }
    render() {
    return (
        <Map google={this.props.google} zoom={10} initialCenter={{
            lat: 43.6532,
            lng: -79.3831843
        }}>
            {Object.values(this.props.locations).map((location, i) => {
                return <Marker name={'Toronto'}  title={location.name} position={{ lat: location.latitude, lng: location.longitude  }} onClick={this.markerClick}
                name={'Current location'} key={i} />
            })}
        
            <InfoWindow marker={this.state.activeMarker} onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
                <div>
                    <h1>hey</h1>
                    <button>Save</button>
                </div>
            </InfoWindow>
        
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCNX1tthuQLaX98UVGv2dcbFnpjdhw0TnQ')
})(MapContainer)