import { m } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import { urlFor } from "@/client/sanity-client";
import StarIcon from "@/icon/StarIcon";
import { cn } from "@/lib/utils";

const FeaturesSection = ({ homeData }: { homeData: homeType }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <m.div
      className="max-w-gutter mx-auto py-8 md:py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div id="features" />
      <m.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Badge>FEATURES</Badge>
      </m.div>

      <m.h2
        className="text-2xl md:text-4xl capitalize font-nohemi text-center mt-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {homeData.featuresHeading}
      </m.h2>

      <m.p
        className="opacity-80 my-2 text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {homeData.faqDescription}
      </m.p>

      {/* --- Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
        {/* --- Left Feature --- */}
        <m.div
          className="fratures-card h-[554px] overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: isMobile ? 1.01 : 1.02, y: isMobile ? -2 : -5 }}
        >
          <div className="relative z-10">
            <m.h3
              className="font-nohemi text-center text-2xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {homeData.featuresItems?.[0]?.title}
            </m.h3>

            <m.p
              className="font-light text-center opacity-70"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {homeData.featuresItems?.[0]?.description}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {homeData.featuresItems?.[0]?.previewImage && (
                <Image
                  src={urlFor(homeData.featuresItems[0].previewImage).url()}
                  alt={homeData.featuresItems[0].title}
                  width={400}
                  height={300}
                  className="mt-2 w-[285px] h-auto mx-auto"
                />
              )}
            </m.div>
          </div>

          <m.div
            className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </m.div>

        {/* --- Middle Column --- */}
        <div className="flex flex-col gap-7">
          {/* Review Card */}
          <m.div
            className="fratures-card h-[262px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              scale: isMobile ? 1.01 : 1.02,
              y: isMobile ? -2 : -3,
            }}
          >
            <m.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {(homeData?.review?.avatars ?? []).map((avatar, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.9 + index * 0.08,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
                  className={cn("size-10", index !== 0 ? "-ml-3" : "")}
                >
                  <Image
                    src={urlFor(avatar).url()}
                    alt={`User Avatar ${index + 1}`}
                    width={40}
                    height={40}
                    className={cn(
                      "size-10 rounded-full border border-white object-cover"
                    )}
                  />
                </m.div>
              ))}
            </m.div>

            <m.p
              className="font-black text-[40px] text-center my-2"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 1.1,
                type: "spring",
                stiffness: 120,
              }}
            >
              {homeData?.review?.totalUsers}+
            </m.p>

            <m.div
              className="flex gap-1 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, rotate: -90, scale: 0 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.4 + i * 0.08,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: isMobile ? 1.1 : 1.2,
                    rotate: isMobile ? 10 : 15,
                  }}
                >
                  <StarIcon />
                </m.div>
              ))}
            </m.div>

            <m.div
              dangerouslySetInnerHTML={{
                __html: homeData?.review?.description,
              }}
              className="text-center mt-3 text-sm opacity-90 [&_span]:font-bold [&_span]:text-primary [&_span]:uppercase"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.4 }}
            />
          </m.div>

          {/* Bottom Middle Feature */}
          <m.div
            className="fratures-card h-[262px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{
              scale: isMobile ? 1.01 : 1.02,
              y: isMobile ? -2 : -3,
            }}
          >
            <m.h3
              className="font-nohemi text-center text-2xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              {homeData.featuresItems?.[1]?.title}
            </m.h3>

            <m.p
              className="font-light text-center opacity-70"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              {homeData.featuresItems?.[1]?.description}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {homeData.featuresItems?.[1]?.previewImage && (
                <Image
                  src={urlFor(homeData.featuresItems[1].previewImage).url()}
                  alt={homeData.featuresItems[1].title}
                  width={400}
                  height={300}
                  className="mt-2 w-[285px] h-auto mx-auto"
                />
              )}
            </m.div>
          </m.div>
        </div>

        {/* --- Right Feature --- */}
        <m.div
          className="fratures-card h-[554px] overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: isMobile ? 1.01 : 1.02, y: isMobile ? -2 : -5 }}
        >
          <div className="relative z-10">
            <m.h3
              className="font-nohemi text-center text-2xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {homeData.featuresItems?.[2]?.title}
            </m.h3>

            <m.p
              className="font-light text-center opacity-70"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {homeData.featuresItems?.[2]?.description}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {homeData.featuresItems?.[2]?.previewImage && (
                <Image
                  src={urlFor(homeData.featuresItems[2].previewImage).url()}
                  alt={homeData.featuresItems[2].title}
                  width={400}
                  height={300}
                  className="mt-2 w-[285px] h-auto mx-auto"
                />
              )}
            </m.div>
          </div>

          <m.div
            className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
          />
        </m.div>
      </div>
    </m.div>
  );
};

export default FeaturesSection;
