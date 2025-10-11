interface QuoteSectionProps {
    quote: {
      content: string;
      author: string;
    };
    onRefresh: () => void;
  }
  
  export function QuoteSection({ quote, onRefresh }: QuoteSectionProps) {
    return (
            <div className="flex justify-between items-start max-w-[650px] gap-1 px-5 py-8 md:px-15 lg:pl-40 lg:pt-15">
              <div>
                <p className="text-lg font-normal mb-3 max-w-[574px]">{quote.content}</p>
                <cite className="mt-3">{quote.author}</cite>
              </div>
              <button onClick={onRefresh} className="mt-2 cursor-pointer w-6">
                <img src="/images/refresh.svg" alt="Refresh button" className="w-13 md:w-8 md:h-8" />
              </button>
            </div>
          )};