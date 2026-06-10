import { useState, useMemo } from 'react'
import { QuoteSection } from './components/QuoteSection';
import { ClockSection } from './components/ClockSection';
import { ExpandedInfo } from './components/ExpandedInfo';
import { useClock } from './hooks/useClock';
import { useGeolocation } from './hooks/useGeolocation';
import { useQuote } from './hooks/useQuote';
import { getTimeString, getTimeZone, getDayOfWeek, getDayOfYear, getWeekNumber, getPeriodOfDay } from './utils/dateUtils.ts'

function App() {
  const clock = useClock();
  const locationName = useGeolocation();
  const { quote, handleNewQuote } = useQuote();
  const [isExpanded, setIsExpanded] = useState(false);

  const timeData = useMemo(() => ({
    timeString: getTimeString(clock),
    timeZone: getTimeZone(),
    dayOfWeek: getDayOfWeek(clock),
    dayOfYear: getDayOfYear(clock),
    weekNumber: getWeekNumber(clock),
    period: getPeriodOfDay(clock.getHours())
  }), [clock]);

  const isDaytime = timeData.period === 'morning' || timeData.period === 'afternoon';

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const backgroundClasses = isDaytime
    ? "bg-[url('/images/day-sm.png')] md:bg-[url('/images/day-m.png')] lg:bg-[url('/images/day-lg.png')]"
    : "bg-[url('/images/night-sm.png')] md:bg-[url('/images/night-m.png')] lg:bg-[url('/images/night-lg.png')]";

  return (
    <div className={`min-h-screen bg-fixed bg-cover bg-center bg-no-repeat font-bold text-white flex flex-col ${isExpanded ? 'justify-end' : 'justify-between'} ${backgroundClasses}`}>
      {!isExpanded && <QuoteSection quote={quote} onRefresh={handleNewQuote} />}

      <ClockSection
        timeString={timeData.timeString}
        timeZone={timeData.timeZone}
        locationName={locationName}
        isExpanded={isExpanded}
        onToggle={toggleExpanded}
        period={timeData.period}
        isDaytime={isDaytime}
      />

      {isExpanded && (
        <ExpandedInfo
          locationName={locationName}
          dayOfWeek={timeData.dayOfWeek}
          dayOfYear={timeData.dayOfYear}
          weekNumber={timeData.weekNumber}
        />
      )}
    </div>
  )
}

export default App;