import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Icon } from 'react-leaflet';

import { GridItem } from 'pieces/grid';

export const Map = ({ options, ...props }) => {
  const tileConfig = {
    attribution: '',
    maxZoom: 10,
    id: 'thepuzzlers/ck70kkm990rue1imvmqf52oji',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      // eslint-disable-next-line max-len
      'pk.eyJ1IjoidGhlcHV6emxlcnMiLCJhIjoiY2p4bDMydG13MDF2bTQwczQwaTR4MzBkdCJ9.bJIkN6GUtAFoWCOiOzPJew',
  };

  const MarkerIcon = (
    <Icon
      // eslint-disable-next-line max-len
      iconUrl="http://localhost:8000/static/mdl-expo-logo-white-9bbf836eef89f01b28f40abd131b4f7b.svg"
    />
  );
  if (typeof window !== 'undefined') {
    return (
      <GridItem {...props}>
        <LeafletMap style={{ height: '100%' }} {...options}>
          <TileLayer
            url={
              // eslint-disable-next-line max-len
              'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
            }
            {...tileConfig}
          />
          <Marker
            Icon={MarkerIcon}
            position={[50, 10]}
            style={{ backgroundColor: 'red', height: '10px', width: '3px' }}
          >
            {/* <Popup>Popup for any custom information.</Popup> */}
          </Marker>
        </LeafletMap>
      </GridItem>
    );
  }
  return <GridItem {...props} />;
};
