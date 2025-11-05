import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { urlFor } from "@/client/sanity-client";
import { m } from "motion/react";
import { useState, useEffect } from "react";

const DownloadSection = ({ homeData }: { homeData: homeType }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <m.div
      className="py-8 md:py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div id="download" />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-x-14 gap-y-8">
        {/* --- Left Image Section --- */}
        <m.div
          className="w-full md:w-[300px] shrink-0 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
        >
          <m.div
            className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.3 }}
          />
          <m.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={urlFor(homeData.downloaFeatureImage).url()}
              alt="Download Feature"
              width={800}
              height={600}
              className="w-full h-auto relative z-10"
            />
          </m.div>
        </m.div>

        {/* --- Right Text Section --- */}
        <div>
          <m.div
            className="flex max-md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Badge>DOWNLOAD NOW</Badge>
          </m.div>

          <m.h2
            className="text-2xl md:text-4xl capitalize font-nohemi max-md:text-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {homeData.downloadTitle}
          </m.h2>

          <m.p
            className="opacity-80 my-2 max-md:text-center max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {homeData.downloadDescription}
          </m.p>

          {/* --- QR + Store Buttons --- */}
          <m.div
            className="flex mt-10 items-center gap-5 md:gap-10 max-md:justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* --- QR Code --- */}
            <m.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
            >
              <m.div
                initial={{ rotate: -10 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ rotate: 2 }}
              >
                <Image
                  src="/assets/qr-wrap.png"
                  alt="QR Wrap"
                  width={150}
                  height={150}
                  className="size-36"
                />
              </m.div>

              <m.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1.3,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Image
                  src={urlFor(homeData.downloaQr).url()}
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="size-32"
                />
              </m.div>
            </m.div>

            {/* --- App Store Links --- */}
            <div className="flex flex-col gap-3">
              <m.a
                href={homeData.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: isMobile ? 1.02 : 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/assets/app-store.png"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                />
              </m.a>

              <m.a
                href={homeData.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: isMobile ? 1.02 : 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/assets/play-store.png"
                  alt="Download on Google Play"
                  width={150}
                  height={50}
                />
              </m.a>
            </div>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default DownloadSection;
