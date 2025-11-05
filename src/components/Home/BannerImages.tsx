import { useState, useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "motion/react";
import { homeType } from "@/lib/types";
import { urlFor } from "@/client/sanity-client";
import { cn } from "@/lib/utils";

const BannerImages = ({ homeData }: { homeData: homeType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = homeData?.appPreviews || [];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getPosition = (imageIndex: number) => {
    const diff = (imageIndex - currentIndex + images.length) % images.length;
    if (diff === 0) return "center";
    if (diff === images.length - 1) return "left";
    if (diff === 1) return "right";
    return "hidden";
  };

  const variants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 30,
      opacity: 1,
      rotateY: 0,
      filter: "brightness(1) blur(0px)",
    },
    left: {
      x: "-75%",
      scale: 0.75,
      zIndex: 10,
      opacity: 0.7,
      rotateY: 15,
      filter: "brightness(0.9)",
    },
    right: {
      x: "75%",
      scale: 0.75,
      zIndex: 10,
      opacity: 0.7,
      rotateY: -15,
      filter: "brightness(0.9)",
    },
    hidden: {
      x: "150%",
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
      rotateY: -30,
      filter: "brightness(0.5) blur(2px)",
    },
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <m.div
      className="relative mt-16 md:mt-24 h-[500px] md:h-[650px] flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <div
        className="relative w-full max-w-6xl h-full"
        style={{ perspective: "2000px" }}
      >
        <AnimatePresence mode="sync">
          {images.map((image, index) => {
            const position = getPosition(index);

            if (position === "hidden") return null;

            const sizeClass =
              position === "center"
                ? "w-[280px] md:w-[380px]"
                : "w-[240px] md:w-[320px]";

            return (
              <m.div
                key={index}
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  sizeClass
                )}
                variants={variants}
                initial={position}
                animate={position}
                exit="hidden"
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                  opacity: { duration: 0.5 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative w-full aspect-9/19 overflow-hidden shadow-2xl">
                  <Image
                    src={urlFor(image.previewImage).url()}
                    alt={image.previewAltText || `App Preview ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>
    </m.div>
  );
};

export default BannerImages;
