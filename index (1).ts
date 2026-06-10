import { useState, useEffect } from 'react';
import { getLocationName } from '../services/locationService';
import { DEFAULT_LOCATION } from '../constants/index';

export function useGeolocation() {
  const [locationName, setLocationName] = useState<string>("");

  useEffect(() => {
    async function handleSuccess(position: GeolocationPosition) {
      const cityName = await getLocationName(
        position.coords.latitude, 
        position.coords.longitude
      );
      setLocationName(cityName);
    }

    async function handleError() {
      const errorCity = await getLocationName(
        DEFAULT_LOCATION.latitude, 
        DEFAULT_LOCATION.longitude
      );
      setLocationName(errorCity);
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return locationName;
}
