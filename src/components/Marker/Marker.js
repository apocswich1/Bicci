import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, name, id } = props;
    return (
      <React.Fragment>
        <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
      <div className="marker-solid"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
      </React.Fragment>
    );
  };

  export default Marker;