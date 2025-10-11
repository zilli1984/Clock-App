interface ExpandedInfoProps{
    locationName: string | null;
    dayOfWeek: number;
    dayOfYear: number;
    weekNumber: number;
}

export function ExpandedInfo({ locationName, dayOfWeek, dayOfYear, weekNumber }: ExpandedInfoProps) {
    return (
        <ul className="bg-white/75 px-4 py-10 flex flex-col items-start w-full gap-6 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10 md:py-20 md:px-16 lg:px-40 lg:py-15 ">
        <li className='flex justify-between items-center w-full md:block'>
          <p className="text-[10px] font-normal text-neutral-800 md:text-sm">CURRENT TIMEZONE</p>
          <p className="text-[15px] text-black md:text-6xl">{locationName}</p>
        </li>
        <li className='flex justify-between items-center w-full md:block'>
          <p className="text-[10px] font-normal text-neutral-800 md:text-sm">DAY OF THE WEEK</p>
          <p className="text-[15px] text-black md:text-6xl">{dayOfWeek}</p>
        </li>
        <li className='flex justify-between items-center w-full md:block'>
          <p className="text-[10px] font-normal text-neutral-800 md:text-sm">DAY OF THE YEAR</p>
          <p className="text-[15px] text-black md:text-6xl">{dayOfYear}</p>
        </li>
        <li className='flex justify-between items-center w-full md:block'>
          <p className="text-[10px] font-normal text-neutral-800 md:text-sm">WEEK NUMBER</p>
          <p className="text-[15px] text-black md:text-6xl font-bold">{weekNumber}</p>
        </li>
      </ul>
    )
}