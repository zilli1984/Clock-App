import { useState, useEffect } from 'react'
import { getLocationName } from './services/locationService';
import { QuoteSection } from './components/QuoteSection';
import { ClockSection } from './components/ClockSection';
import { ExpandedInfo } from './components/ExpandedInfo';
import { fetchNewQuote } from './services/quoteServices';

function App() {
  const [clock, setClock] = useState(new Date());
  const [locationName, setLocationName] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [quote, setQuote] = useState({
    content: "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
    author: "Ada Lovalace"
  })

  async function handleNewQuote() {
    try {
      const newQuote = await fetchNewQuote();
      setQuote(newQuote);
    } catch (error) {
      console.error("Erro ao buscar quote:", error);
    }
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
    async function success(position: GeolocationPosition) {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      const cityName = await getLocationName(coords.latitude, coords.longitude);
      setLocationName(cityName)
    }

    async function error() {
      const locError = {
        latitude: 51.5072,
        longitude: -0.1275
      };
      const errorCity = await getLocationName(locError.latitude, locError.longitude);
      setLocationName(errorCity)
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const hours = clock.getHours().toString().padStart(2, '0');
  const minutes = clock.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  const timeZone = new Date().toLocaleDateString('en', { timeZoneName: 'short' }).split(', ')[1];
  const dayOfWeek = clock.getDay() + 1;

  const startOfYear = new Date(clock.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((clock.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const weekNumber = Math.ceil(dayOfYear / 7);



  return (
    <>
      <div className="bg-[url('/images/day-sm.png')] min-h-screen bg-fixed bg-cover bg-center bg-no-repeat
                      font-bold text-white 
                      flex flex-col justify-between
                      md:bg-[url('/images/day-m.png')]
                      lg:bg-[url('/images/day-lg.png')]">

        {!isExpanded && <QuoteSection quote={quote} onRefresh={handleNewQuote} />}

        <ClockSection timeString={timeString} timeZone={timeZone} locationName={locationName} isExpanded={isExpanded} onToggle={toggleExpanded} />

        {isExpanded && <ExpandedInfo locationName={locationName} dayOfWeek={dayOfWeek} dayOfYear={dayOfYear} weekNumber={weekNumber} />}
      </div>
    </>
  )
}

export default App;