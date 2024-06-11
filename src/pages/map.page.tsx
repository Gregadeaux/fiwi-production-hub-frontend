import GoogleMap from 'google-maps-react-markers';
import { MapMarker } from '../components/map-marker.compontent';

export const MapPage: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 44.5236,
      lng: -89.5746,
    },
    zoom: 8,
  };

  return (
    <div style={{ height: '80vh', width: '100vh' }} className="w-full h-full p-16 ml-24">
      <GoogleMap defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
        <MapMarker lat={42.8631} lng={-88.3323} text="My Marker" />
      </GoogleMap>
    </div>
  );
};
