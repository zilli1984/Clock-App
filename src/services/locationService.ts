  export async function getLocationName(latitude: number, longitude: number) {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`;
    const response = await fetch(url);
    const data = await response.json();

    const cityName = `${data.city}, ${data.countryName}`;
    return cityName;
  }