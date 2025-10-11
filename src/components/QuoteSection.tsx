interface QuoteSectionProps {
  quote: {
    content: string;
    author: string;
  };
  onRefresh: () => void;
}

export function QuoteSection({ quote, onRefresh }: QuoteSectionProps) {
  return (
    <div className="relative max-w-[650px] px-5 pt-8 min-h-[80px] md:px-16 md:pt-14 lg:px-[8vw] lg:pb-[8vw] lg:max-w-[850px] min-h-[340px]">
      <div className="pr-10">
        <p className="text-lg font-normal mb-3 max-w-[574px]">{quote.content}</p>
        <cite className="mt-3">{quote.author}</cite>
      </div>
      <button
        onClick={onRefresh}
        className="absolute top-8 right-5 w-8 h-8 flex items-center cursor-pointer justify-center md:pt-13 lg:pt-12"
      >
        <img src="/images/refresh.svg" alt="Refresh" className="w-6 h-6" />
      </button>
    </div>
  )
};
//