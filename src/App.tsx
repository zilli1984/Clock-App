import { useState, useEffect } from 'react'

function App() {
  const [clock, setClock] = useState(new Date());
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  async function getLocationName(latitude, longitude) {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const cityName = `${data.city}, ${data.countryName}`;
    setLocationName(cityName);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    function success(position) {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      setLocation(coords);

      getLocationName(coords.latitude, coords.longitude);
    }

    function error() {
      const locError = {
        latitude: 51.5072,
        longitude: -0.1275
      };
      setLocation(locError);

      getLocationName(locError.latitude, locError.longitude);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }
// hora
  const hours = clock.getHours().toString().padStart(2, '0');
  const minutes = clock.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  // local
  const timeZone = new Date().toLocaleDateString('en', { timeZoneName: 'short' }).split(', ')[1];
  const dayOfWeek = clock.getDay() + 1;

  // dia do ano
  const startOfYear = new Date(clock.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((clock - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
  // numero da semana
  const weekNumber = Math.ceil(dayOfYear / 7);



  return (
    <>
      <div className="bg-[url('/images/day-sm.png')] min-h-screen bg-fixed bg-cover bg-center bg-no-repeat
                      font-bold text-white px-5 py-8 
                      flex flex-col justify-between
                      md:bg-[url('/images/day-m.png')] md:p-15
                      lg:bg-[url('/images/day-lg.png')] lg:px-40">
        <div className="flex justify-between items-start gap-4 max-w-[574px]">
          <div>
            <p className="text-lg font-normal">"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."</p>
            <cite className="mt-3">Ada Lovelace</cite>
          </div>
          <button className="mt-2">
            <img src="/images/refresh.svg" alt="Refresh button" className="w-13 md:w-8 md:h-8" />
          </button>
        </div>
        <div className="lg:flex lg:justify-between lg:items-end">
          <div>
            <div className="flex justify-start items-center gap-2">
              <img src="/images/sun.svg" alt="Sun image" className="w-6" />
              <p className="block md:hidden text-xl font-normal tracking-[4px]">GOOD MORNING</p>
              <p className="hidden md:block text-2xl font-normal tracking-[4px]">GOOD MORNING,IT'S CURRENTLY</p>
            </div>
            <div>
              <time className="text-8xl mr-2 md:text-[200px] md:mb-6">{timeString}<span className="text-2xl font-light md:text-5xl">{timeZone}</span></time>
              <p className="text-sm mb-16 font-bold tracking-[3px] md:text-2xl md:mb-20 lg:mb-0">{locationName || "Carregando localização..."}</p>
            </div>
          </div>
          <div className="items-end">
            <button
              onClick={toggleExpanded}
              className="bg-white text-black px-5 py-3 rounded-full flex items-center gap-3">
              <span className="tracking-[5px]">{isExpanded ? "LESS" : "MORE"}</span>
              <div className={`bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center transform ${isExpanded ? "rotate-270" : "rotate-90"}`}>❯</div>
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="bg-white/75 p-12">
            <div className="grid grid-cols-2  gap-12">
              <div>
                <p className="text-sm font-normal text-neutral-800 mb-2">CURRENT TIMEZONE</p>
                <p className="text-6xl text-black">{locationName}</p>
              </div>
              <div>
                <p className="text-sm font-normal text-neutral-800 mb-2 mr-5">DAY OF THE WEEK</p>
                <p className="text-6xl text-black">{dayOfWeek}</p>
              </div>
              <div>
                <p className="text-sm font-normal text-neutral-800 mb-2">DAY OF THE YEAR</p>
                <p className="text-6xl text-black">{dayOfYear}</p>
              </div>
              <div>
                <p className="text-sm font-normal text-neutral-800 mb-2">WEEK NUMBER</p>
                <p className="text-6xl text-black font-bold">{weekNumber}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App;