import { GoogleMap, MarkerF } from "@react-google-maps/api";
import useMaps from "../../hooks/useMaps";
import { MapLocation } from "../ui/Icons";

export default function Address() {
  const {
    isLoaded,
    onLoad,
    onUnmount,
    getAddress,
    position,
    setPosition,
    address,
    defaultPosition,
    containerStyle,
  } = useMaps();

  return (
    <>
      <div className="mt-16 mb-3 flex items-center">
        {MapLocation}
        <h1 className="pl-3 text-2xl uppercase">delivery address</h1>
      </div>

      <div className="mb-5 flex w-full flex-col overflow-hidden rounded-md">
        <label className="cursor-not-allowed bg-slate-600 p-3">
          {address[0] !== undefined ? address[0] + " " + address[1] : "Address"}
        </label>
        <label className="cursor-not-allowed bg-slate-700 p-3">
          {address[2]?.trimStart() ?? "City"}
        </label>
        <label className="cursor-not-allowed bg-slate-600 p-3">
          {address[3]?.trimStart() ?? "ZIP Code"}
        </label>
      </div>

      {isLoaded ? (
        <GoogleMap
          onClick={(ev) => {
            const newPosition = {
              lat: ev.latLng?.lat() ?? defaultPosition.lat,
              lng: ev.latLng?.lng() ?? defaultPosition.lng,
            };
            setPosition(newPosition);
            getAddress(newPosition);
          }}
          mapContainerStyle={containerStyle}
          center={position}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF position={position} animation={1} />
        </GoogleMap>
      ) : (
        false
      )}
    </>
  );
}
