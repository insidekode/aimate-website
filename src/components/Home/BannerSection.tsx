import Image from "next/image";
import { m } from "motion/react";
import StarIcon from "@/icon/StarIcon";
import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import { urlFor } from "@/client/sanity-client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import PlayIcon from "@/icon/PlayIcon";
import BannerImages from "./BannerImages";

const BannerSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <m.div
      className="max-w-gutter mx-auto py-8 md:py-14 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <m.div
        className="bg-primary size-48 md:size-72 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <div className="relative z-10">
        <m.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Badge>AI PARTNER</Badge>
        </m.div>
        <m.h2
          className="text-3xl md:text-5xl uppercase font-nohemi text-center mt-5 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {homeData.heading}
        </m.h2>
        <m.p
          className="opacity-80 my-2 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {homeData.subHeading}
        </m.p>
        <m.div
          className="flex items-center gap-5 justify-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <m.a
            href="/#download"
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button>Download Now</Button>
          </m.a>
          <m.a
            href="/"
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button variant="outline">
              <PlayIcon />
              Play Video
            </Button>
          </m.a>
        </m.div>
        <m.div
          className="flex max-md:flex-col items-center gap-2 justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="flex justify-center">
            {homeData?.review?.avatars.map((avatar, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.3 + index * 0.1,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className={cn(
                  "size-10 md:size-14",
                  index !== 0 ? "-ml-4 md:-ml-6" : ""
                )}
              >
                <Image
                  src={urlFor(avatar).url()}
                  alt={`User Avatar ${index + 1}`}
                  width={40}
                  height={40}
                  className={cn(
                    "size-10 md:size-14 rounded-full border border-white object-cover"
                  )}
                />
              </m.div>
            ))}
          </div>
          <div>
            <m.div
              className="flex gap-1 max-md:justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{
                    delay: 1.8 + i * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <StarIcon />
                </m.div>
              ))}
            </m.div>
            <m.div
              dangerouslySetInnerHTML={{
                __html: homeData?.review?.description,
              }}
              className="text-center mt-1 text-sm opacity-90 [&_span]:font-bold [&_span]:text-primary [&_span]:uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            />
          </div>
        </m.div>
        <BannerImages homeData={homeData} />
      </div>
    </m.div>
  );
};

export default BannerSection;
