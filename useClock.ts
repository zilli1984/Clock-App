import type { PeriodOfDay } from '../types';

interface ClockSectionProps {
  timeString: string;
  timeZone: string;
  locationName: string | null;
  isExpanded: boolean;
  onToggle: () => void;
  period: PeriodOfDay;
  isDaytime: boolean;
}

const getContainerStyles = (isExpanded: boolean) =>
  `px-5 ${isExpanded ? 'pt-12 pb-12' : 'py-8'} md:px-16 ${isExpanded ? 'md:pt-16 md:pb-16' : 'md:py-16'} lg:flex lg:justify-between lg:items-center lg:px-[8vw] ${isExpanded ? 'lg:pt-20 lg:pb-16' : 'lg:py-20'}`;

const GREETING_CONTAINER_STYLES = "flex justify-start items-center gap-3 md:gap-5";
const GREETING_MOBILE_STYLES = "block md:hidden text-base font-normal tracking-[3px] md:text-xl md:tracking-[4px]";
const GREETING_DESKTOP_STYLES = "hidden md:block text-lg font-normal tracking-[3.5px] lg:text-2xl lg:tracking-[4.8px]";
const TIME_CONTAINER_STYLES = "flex flex-col gap-3 md:gap-4";
const TIME_STYLES = "text-[100px] leading-none md:text-[175px] lg:text-[200px]";
const TIMEZONE_STYLES = "text-[32px] font-light md:text-[40px] lg:text-[48px] ml-1";
const LOCATION_STYLES = "text-sm mb-0 font-bold tracking-[3px] md:text-lg md:tracking-[3.6px] lg:text-2xl lg:tracking-[4.8px]";
const BUTTON_CONTAINER_STYLES = "flex items-end mt-12 md:mt-16 lg:mt-0";
const BUTTON_STYLES = "bg-white text-black cursor-pointer px-4 py-3 rounded-full flex items-center gap-3 hover:opacity-90 transition-opacity md:px-5 md:py-4";
const BUTTON_TEXT_STYLES = "text-xs font-bold tracking-[4px] md:text-sm md:tracking-[5px]";
const getArrowStyles = (isExpanded: boolean) =>
  `bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center transform transition-transform ${isExpanded ? "rotate-180" : "rotate-0"}`;

export function ClockSection({ timeString, timeZone, locationName, isExpanded, onToggle, period, isDaytime }: ClockSectionProps) {
  return (
    <div className={getContainerStyles(isExpanded)}>
      <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
        <div className={GREETING_CONTAINER_STYLES}>
          <img src={isDaytime ? "/images/sun.svg" : "/images/moon.svg"} alt={isDaytime ? "Sun" : "Moon"} className="w-5 h-5 md:w-6 md:h-6" />
          <p className={GREETING_MOBILE_STYLES}>GOOD {period.toUpperCase()}</p>
          <p className={GREETING_DESKTOP_STYLES}>GOOD {period.toUpperCase()}, IT'S CURRENTLY</p>
        </div>
        <div className={TIME_CONTAINER_STYLES}>
          <time className={TIME_STYLES}>
            {timeString}<span className={TIMEZONE_STYLES}>{timeZone}</span>
          </time>
          <p className={LOCATION_STYLES}>IN {locationName || "LOADING..."}</p>
        </div>
      </div>
      <div className={BUTTON_CONTAINER_STYLES}>
        <button onClick={onToggle} className={BUTTON_STYLES} aria-label={isExpanded ? "Show less" : "Show more"}>
          <span className={BUTTON_TEXT_STYLES}>{isExpanded ? "LESS" : "MORE"}</span>
          <div className={getArrowStyles(isExpanded)}>
            <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1l6 6 6-6" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
