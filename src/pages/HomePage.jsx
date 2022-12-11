import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import list from '../data/anemometers/list.json';

const HomePage = () => {
  const data = list;
  const mainMapPosition = [21.150303, -156.996175];

  return (
    <>
      <div className="introduction-container">
        <p>Welcome to WindForLife !</p>
        <p>Select an anemometer to see more details.</p>
      </div>
      <MapContainer center={mainMapPosition} zoom={9} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data &&
          data.map((anemometer) => {
            return (
              <Marker
                key={`marker-${anemometer.id}`}
                position={[anemometer.loc.lat, anemometer.loc.long]}
              >
                <Popup>
                  <p className="anemometer-name">{anemometer.name}</p>
                  <p>Latitude: {anemometer.loc.lat}</p>
                  <p>Longitude: {anemometer.loc.long}</p>
                  <Link to={`/${anemometer.id}`}>More details</Link>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </>
  );
};

export default HomePage;
