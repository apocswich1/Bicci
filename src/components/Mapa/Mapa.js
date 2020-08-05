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
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAasrq37Oc5edRFZ1Am5SW6ay0iffy9Wbo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px`,width:`1450px` }} />,
    // containerElement: <div style={{ height: `600px`,width:`560px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route({
        origin: new window.google.maps.LatLng(this.props.order.driverLocation._lat, this.props.order.driverLocation._long),
        destination: new window.google.maps.LatLng(this.props.order.toAddressLocation._lat, this.props.order.toAddressLocation._long),
        // origin: new window.google.maps.LatLng(latitude1, longitude1),
        // destination: new window.google.maps.LatLng(latitude2, longitude2),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          //alert(result);
          this.setState({
            directions: result,
          });
        } else {
          alert(result);
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={new window.google.maps.LatLng(props.order.fromAddressLocation._lat, props.order.fromAddressLocation._long)}
   //defaultCenter={new window.google.maps.LatLng(0, 0)}
  >
    {props.order.fromAddress && <DirectionsRenderer directions={props.directions} />}
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
        {/* <Marker
          icon={image}
          key={'marker.photo_id'}
          position={{ lat: props.order.toAddressLocation._lat, lng: props.order.toAddressLocation._long }}
        />
           <Marker
          icon={image}
          key={'marker.photo_id'}
          position={{ lat: props.order.driverLocation._lat, lng: props.order.driverLocation._long }}
        /> */}
    </MarkerClusterer>
  </GoogleMap>
);

export default Mapa;