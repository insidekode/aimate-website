import { homeType } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PortableContent from "../Richtext/PortableContent";

const FaqSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="max-w-gutter mx-auto py-20">
      <h2 className="text-2xl md:text-4xl uppercase font-agane text-center">
        {homeData.faqTitle}
      </h2>
      <p className="opacity-80 my-2 text-center max-w-xl mx-auto">
        {homeData.faqDescription}
      </p>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-8"
      >
        {homeData.faqs?.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="prose-p:text-sm prose-p:opacity-80">
              <PortableContent content={item.answer} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
