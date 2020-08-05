import Geocode from "react-geocode";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyAasrq37Oc5edRFZ1Am5SW6ay0iffy9Wbo");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

const geocode = {
    direccion: async (data) => {
        let datos = await Geocode.fromAddress(data);
        console.log(datos);
        return await datos.results[0].geometry.location;
        // Geocode.fromAddress(data).then(
        //     response => {
        //       const { lat, lng } = response.results[0].geometry.location;
        //       console.log(lat, lng);
        //       return response.results[0].geometry.location;
        //     },
        //     error => {
        //       console.error(error);
        //       return error;
        //     }
        //   );
    },
}

export default geocode;