import React from 'react';
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  google,
  DirectionsRenderer,
  Marker
} = require("react-google-maps");
const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const Mapa = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyARbD4ypapuQsPuquP2UPaTSNuffK3TdZ0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: new google.maps.LatLng(this.props.order.washerLocation._latitude, this.props.order.washerLocation._longitude),
        destination: new google.maps.LatLng(this.props.order.coordinates._latitude, this.props.order.coordinates._longitude),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={new google.maps.LatLng(props.order.coordinates._latitude, props.order.coordinates._longitude)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
        {/* <Marker
          icon={image}
          key={'marker.photo_id'}
          position={{ lat: props.order.coordinates._latitude, lng: props.order.coordinates._longitude }}
        /> */}
    </MarkerClusterer>
  </GoogleMap>
);

export default Mapa;