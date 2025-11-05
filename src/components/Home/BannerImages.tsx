import Image from "next/image";
import { m } from "motion/react";
import { urlFor } from "@/client/sanity-client";
import { homeType } from "@/lib/types";

const BannerImages = ({ homeData }: { homeData: homeType }) => {
  return (
    <m.div
      className="flex items-center mt-8 md:mt-16 justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <m.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          x: [0, 50, 100, 50, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 1.7 },
          y: { duration: 0.8, delay: 1.7 },
          scale: { duration: 0.8, delay: 1.7 },
          x: {
            duration: 8,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1, zIndex: 30 }}
        className="w-2/5 md:w-64 -mr-10"
      >
        <Image
          src={urlFor(homeData.appPreviews?.[0]?.previewImage).url()}
          alt={homeData.appPreviews?.[0]?.previewAltText}
          width={1920}
          height={1080}
          className="w-full"
        />
      </m.div>
      <m.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.2, 1, 1.2, 1],
          rotateY: [0, 5, 0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 1.8 },
          y: { duration: 0.8, delay: 1.8 },
          scale: {
            duration: 8,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 8,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.3, zIndex: 40 }}
        className="w-1/2 md:w-80 z-20"
      >
        <Image
          src={urlFor(homeData.appPreviews?.[1]?.previewImage).url()}
          alt={homeData.appPreviews?.[1]?.previewAltText}
          width={1920}
          height={1080}
          className="w-full"
        />
      </m.div>
      <m.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          x: [0, -50, -100, -50, 0],
          rotate: [0, -2, 0, 2, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 1.9 },
          y: { duration: 0.8, delay: 1.9 },
          scale: { duration: 0.8, delay: 1.9 },
          x: {
            duration: 8,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1, zIndex: 30 }}
        className="w-2/5 md:w-64 -ml-10"
      >
        <Image
          src={urlFor(homeData.appPreviews?.[2]?.previewImage).url()}
          alt={homeData.appPreviews?.[2]?.previewAltText}
          width={1920}
          height={1080}
          className="w-full"
        />
      </m.div>
    </m.div>
  );
};

export default BannerImages;
