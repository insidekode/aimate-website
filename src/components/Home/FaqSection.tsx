import { m, useInView } from "motion/react";
import { useRef } from "react";
import { homeType } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PortableContent from "../Richtext/PortableContent";
import { Badge } from "@/components/ui/badge";

const FaqSection = ({ homeData }: { homeData: homeType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <m.div
      ref={ref}
      className="max-w-gutter mx-auto py-8 md:py-14"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div id="faqs" />
      <m.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Badge>FAQs</Badge>
      </m.div>

      <m.h2
        className="text-2xl md:text-4xl capitalize font-nohemi text-center mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {homeData.faqTitle}
      </m.h2>

      <m.p
        className="opacity-80 my-2 text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {homeData.faqDescription}
      </m.p>

      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-8 items-start"
        >
          {homeData.faqs?.map((item, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`} className="card-sahdow">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="prose-p:text-sm prose-p:opacity-80">
                  <PortableContent content={item.answer} />
                </AccordionContent>
              </AccordionItem>
            </m.div>
          ))}
        </Accordion>
      </m.div>
    </m.div>
  );
};

export default FaqSection;
