import type { Quote } from '../types';

interface QuoteSectionProps {
  quote: Quote;
  onRefresh: () => void;
}

const CONTAINER_STYLES = "relative h-[180px] md:h-[220px] lg:h-[250px] px-5 pt-8 pb-5 md:px-16 md:pt-14 md:pb-8 lg:px-[8vw] lg:pt-16 lg:pb-0 flex items-start";
const CONTENT_WRAPPER_STYLES = "pr-12 md:pr-16 overflow-hidden";
const BUTTON_STYLES = "absolute top-8 right-5 w-8 h-8 flex items-center cursor-pointer justify-center md:top-14 md:right-16 lg:top-16 lg:right-[8vw] hover:opacity-70 transition-opacity";
const TEXT_STYLES = "text-base font-normal mb-2 leading-relaxed md:text-lg md:mb-3 line-clamp-3 md:line-clamp-4";
const CITE_STYLES = "text-sm font-bold md:text-base block";

export function QuoteSection({ quote, onRefresh }: QuoteSectionProps) {
  return (
    <div className={CONTAINER_STYLES}>
      <div className={CONTENT_WRAPPER_STYLES}>
        <p className={TEXT_STYLES}>{quote.content}</p>
        <cite className={CITE_STYLES}>{quote.author}</cite>
      </div>
      <button onClick={onRefresh} className={BUTTON_STYLES} aria-label="Refresh quote">
        <img src="/images/refresh.svg" alt="Refresh" className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  )
};
//