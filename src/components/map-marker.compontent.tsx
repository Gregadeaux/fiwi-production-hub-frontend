import marker from '../assets/marker.svg';

export const MapMarker: React.FC<{ lat: number; lng: number; text: string }> = () => {
  return (
    <div className="absolute translate-x-[-50%] translate-y-[-50%] w-48 px-8 grid place-content-center">
      <img src={marker} className="w-8" alt="Vite logo" />;
    </div>
  );
};
