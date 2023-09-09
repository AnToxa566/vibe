"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CSSProperties, useState } from "react";

import { ENV } from "~/common/constants/constants";
import { BaseProps } from "~/common/interfaces/interfaces";
import { defaultLatLng } from "../../common/default-lat-lng";

interface Props extends BaseProps {
  containerStyle?: CSSProperties;
  center?: google.maps.LatLngLiteral;
  mapOptions?: google.maps.MapOptions;
}

const Map: React.FC<Props> = ({
  containerStyle = {},
  mapOptions = {},
  center = defaultLatLng,
  className = "",
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: ENV.GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  };

  const onUnmount = (map: google.maps.Map) => {
    setMap(null);
  };

  return isLoaded ? (
    <div className={`${className}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        options={mapOptions}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export { Map };
