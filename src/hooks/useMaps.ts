import { useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

export default function useMaps() {
	const containerStyle = {
		width: "100%",
		height: "350px",
		borderRadius: "6px",
		marginBottom: "80px",
	};

	const defaultPosition = {
		lat: -7.20204177013787,
		lng: -39.31714336853566,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [map, setMap] = useState(null);
	const [address, setAddress] = useState<string[]>([]);
	const [position, setPosition] = useState(defaultPosition);

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? "",
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onLoad = useCallback(function callback(map: any) {
		map.setZoom(16);
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback() {
		setMap(null);
	}, []);

	function getAddress({ lat, lng }: { lat: number; lng: number }) {
		new google.maps.Geocoder().geocode(
			{ location: new google.maps.LatLng(lat, lng) },
			function (results, status) {
				if (status === "OK") {
					const currAddress = results
						? results[0].formatted_address
						: "not found...";
					setAddress(currAddress.split(","));
				}
			}
		);
	}

	return {
		isLoaded,
		onLoad,
		onUnmount,
		getAddress,
		position,
		setPosition,
		address,
		defaultPosition,
		containerStyle,
	};
}
