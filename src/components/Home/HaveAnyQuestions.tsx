import { m, useInView } from "motion/react";
import { useRef } from "react";
import { homeType } from "@/lib/types";
import { Button } from "../ui/button";

const HaveAnyQuestions = ({ homeData }: { homeData: homeType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <m.div
      ref={ref}
      className="max-w-gutter mx-auto flex flex-col md:flex-row items-center justify-betwee pt-8 md:pt-14 gap-y-5"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <m.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <m.h2
          className="text-xl md:text-2xl font-nohemi max-w-60 capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {homeData.haveQnTitle}
        </m.h2>
        <m.p
          className="opacity-80 my-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {homeData.haveQnDescription}
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button>Send a message</Button>
        </m.div>
      </m.div>
      {homeData.haveQnSubTitle && (
        <m.p
          className="opacity-80 border-l-4 border-primary pl-3"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {homeData.haveQnSubTitle}
        </m.p>
      )}
    </m.div>
  );
};

export default HaveAnyQuestions;
