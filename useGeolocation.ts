interface ExpandedInfoProps {
  locationName: string | null;
  dayOfWeek: number;
  dayOfYear: number;
  weekNumber: number;
}

const CONTAINER_STYLES = "bg-white/75 backdrop-blur-sm px-5 py-12 flex flex-col items-start w-full gap-8 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12 md:py-16 md:px-16 lg:px-[8vw] lg:py-20 lg:gap-x-24";
const ITEM_STYLES = "flex justify-between items-center w-full md:flex-col md:items-start md:gap-2";
const LABEL_STYLES = "text-[11px] font-normal text-neutral-700 tracking-[2px] md:text-xs md:tracking-[2.4px] lg:text-sm lg:tracking-[2.8px] uppercase";
const VALUE_STYLES = "text-xl text-neutral-900 font-bold md:text-4xl lg:text-5xl";

export function ExpandedInfo({ locationName, dayOfWeek, dayOfYear, weekNumber }: ExpandedInfoProps) {
  return (
    <ul className={CONTAINER_STYLES}>
      <li className={ITEM_STYLES}>
        <p className={LABEL_STYLES}>Current Timezone</p>
        <p className={VALUE_STYLES}>{locationName || "Loading..."}</p>
      </li>
      <li className={ITEM_STYLES}>
        <p className={LABEL_STYLES}>Day of the Week</p>
        <p className={VALUE_STYLES}>{dayOfWeek}</p>
      </li>
      <li className={ITEM_STYLES}>
        <p className={LABEL_STYLES}>Day of the Year</p>
        <p className={VALUE_STYLES}>{dayOfYear}</p>
      </li>
      <li className={ITEM_STYLES}>
        <p className={LABEL_STYLES}>Week Number</p>
        <p className={VALUE_STYLES}>{weekNumber}</p>
      </li>
    </ul>
  )
}