import BigQuoteStart from "@/icon/BigQuoteStart";
import BigQuoteEnd from "@/icon/BigQuoteEnd";
import { homeType } from "@/lib/types";

const QuoteSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="max-w-4xl mx-auto py-14 md:py-14 relative">
      <div className="absolute top-3 md:top-5 left-0 md:-left-8">
        <BigQuoteStart />
      </div>
      <div className="absolute bottom-3 md:bottom-8 right-0 md:-right-8">
        <BigQuoteEnd />
      </div>
      <div
        className="text-center text-xl [&_span]:font-bold [&_span]:text-primary [&_span]:uppercase"
        dangerouslySetInnerHTML={{
          __html: homeData.quoteContent,
        }}
      />
    </div>
  );
};

export default QuoteSection;
