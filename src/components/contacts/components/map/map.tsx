"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CSSProperties, useState } from "react";

import { ENV } from "~/common/constants/constants";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

interface Props extends BaseProps {
  center: google.maps.LatLngLiteral;
  containerStyle?: CSSProperties;
  mapOptions?: google.maps.MapOptions;
}

const Map: React.FC<Props> = ({
  center,
  containerStyle = {},
  mapOptions = {},
  className = "",
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: ENV.GOOGLE_MAPS_API_KEY,
    language: "uk",
    region: "UA",
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
        onLoad={onLoad}
        onUnmount={onUnmount}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export { Map };
