import { m, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import { urlFor } from "@/client/sanity-client";
import StarIcon from "@/icon/StarIcon";
import { cn } from "@/lib/utils";

const FeaturesSection = ({ homeData }: { homeData: homeType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <m.div
      ref={ref}
      className="max-w-gutter mx-auto py-8 md:py-14"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div id="features" />
      <m.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Badge>FEATURES</Badge>
      </m.div>
      <m.h2
        className="text-2xl md:text-4xl uppercase font-nohemi text-center mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {homeData.featuresHeading}
      </m.h2>
      <m.p
        className="opacity-80 my-2 text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {homeData.faqDescription}
      </m.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
        <m.div
          className="fratures-card h-[554px] overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: isMobile ? 1.01 : 1.02, y: isMobile ? -2 : -5 }}
        >
          <div className="relative z-10">
            <m.h3
              className="font-nohemi text-center text-2xl"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {homeData.featuresItems?.[0]?.title}
            </m.h3>
            <m.p
              className="font-light text-center opacity-70"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {homeData.featuresItems?.[0]?.description}
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Image
                src={urlFor(homeData.featuresItems?.[0]?.previewImage).url()}
                alt={homeData.featuresItems?.[0]?.title}
                width={400}
                height={300}
                className="mt-2 w-[285px] h-auto mx-auto"
              />
            </m.div>
          </div>
          <m.div
            className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </m.div>
        <div className="flex flex-col gap-7">
          <m.div
            className="fratures-card h-[262px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.95 }
            }
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              scale: isMobile ? 1.01 : 1.02,
              y: isMobile ? -2 : -3,
            }}
          >
            <m.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {homeData?.review?.avatars.map((avatar, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    delay: 0.9 + index * 0.08,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
                >
                  <Image
                    src={urlFor(avatar).url()}
                    alt={`User Avatar ${index + 1}`}
                    width={40}
                    height={40}
                    className={cn(
                      "size-10 rounded-full border border-white object-cover",
                      index !== 0 ? "-ml-3" : ""
                    )}
                  />
                </m.div>
              ))}
            </m.div>
            <m.p
              className="font-black text-[40px] text-center my-2"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }
              }
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
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, rotate: -90, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, rotate: 0, scale: 1 }
                      : { opacity: 0, rotate: -90, scale: 0 }
                  }
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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.8, duration: 0.4 }}
            />
          </m.div>
          <m.div
            className="fratures-card h-[262px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.95 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{
              scale: isMobile ? 1.01 : 1.02,
              y: isMobile ? -2 : -3,
            }}
          >
            <m.h3
              className="font-nohemi text-center text-2xl"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              {homeData.featuresItems?.[1]?.title}
            </m.h3>
            <m.p
              className="font-light text-center opacity-70"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              {homeData.featuresItems?.[1]?.description}
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Image
                src={urlFor(homeData.featuresItems?.[1]?.previewImage).url()}
                alt={homeData.featuresItems?.[1]?.title}
                width={400}
                height={300}
                className="mt-2 w-[285px] h-auto mx-auto"
              />
            </m.div>
          </m.div>
        </div>
        <m.div
          className="fratures-card h-[554px] overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: isMobile ? 1.01 : 1.02, y: isMobile ? -2 : -5 }}
        >
          <div className="relative z-10">
            <m.h3
              className="font-nohemi text-center text-2xl"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {homeData.featuresItems?.[2]?.title}
            </m.h3>
            <m.p
              className="font-light text-center opacity-70"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {homeData.featuresItems?.[2]?.description}
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Image
                src={urlFor(homeData.featuresItems?.[2]?.previewImage).url()}
                alt={homeData.featuresItems?.[2]?.title}
                width={400}
                height={300}
                className="mt-2 w-[285px] h-auto mx-auto"
              />
            </m.div>
          </div>
          <m.div
            className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 1.1 }}
          />
        </m.div>
      </div>
    </m.div>
  );
};

export default FeaturesSection;
