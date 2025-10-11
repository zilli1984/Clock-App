interface ClockSectionProps {
  timeString: string;
  timeZone: string;
  locationName: string | null;
  isExpanded: boolean;
  onToggle: () => void;
  period: string;
  isDaytime: boolean;

}

export function ClockSection({ timeString, timeZone, locationName, isExpanded, onToggle, period, isDaytime }: ClockSectionProps) {
  return (
    <div className={`px-4 ${isExpanded ? 'pt-20' : 'py-5'} md:px-16 md:py-16 lg:flex lg:justify-between lg:items-end lg:px-[8vw] lg:pb-[8vw]`}>
      <div className='flex flex-col gap-2'>
        <div className="flex justify-start items-center gap-5">
          <img src={isDaytime ? "/images/sun.svg" : "/images/moon.svg"} alt="Sun image" className="w-6" />
          <p className="block md:hidden text-xl font-normal tracking-[4px]">GOOD {period.toUpperCase()}</p>
          <p className="hidden md:block text-2xl font-normal tracking-[4px]">GOOD {period.toUpperCase()},IT'S CURRENTLY</p>
        </div>
        <div className='flex flex-col gap-4'>
          <time className="text-8xl mr-2 md:text-[200px] md:mb-3">{timeString}<span className="text-2xl font-light md:text-5xl">{timeZone}</span></time>
          <p className="text-sm mb-12 font-bold tracking-[3px] md:text-2xl md:mb-20 lg:mb-0">{locationName || "Carregando localização..."}</p>
        </div>
      </div>
      <div className="items-end">
        <button
          onClick={onToggle}
          className="bg-white text-black cursor-pointer px-5 py-3 rounded-full flex items-center gap-3">
          <span className="tracking-[5px]">{isExpanded ? "LESS" : "MORE"}</span>
          <div className={`bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center transform ${isExpanded ? "rotate-270" : "rotate-90"}`}>❯</div>
        </button>
      </div>
    </div>
  )
}
