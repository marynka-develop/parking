import React from 'react';
import points from './points';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './MapPage.css';
import Marker from './Marker';
import ReactDOM from 'react-dom';



// Set mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZGRvcyIsImEiOiJja2luMGp6cmoweWZjMnhwa2x5NnNuaHNlIn0.Qvn_J2AttfPs1ttckfH4wA';

class MapPage extends React.Component {

    constructor(props) {
        super(props);

        // Set default coordinates
        this.state = {
            lat: 49.8411898,
            lng: 24.029968,
            zoom: 14.5
        };
    }

    componentDidMount() {

        // Create map element
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        // Add update listener
        map.on('move', () => {
            this.setState({
                lat: map.getCenter().lat.toFixed(4),
                lng: map.getCenter().lng.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        // Add markers to map
        points.features.forEach((marker) => {

            // Create marker node
            const markerNode = document.createElement('div');
            ReactDOM.render(<Marker id={marker.properties.id}/>, markerNode);

            // Make a marker for each feature and add to the map
            new mapboxgl.Marker(markerNode)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        })
    }


    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
        )
    }
}

export default MapPage;


