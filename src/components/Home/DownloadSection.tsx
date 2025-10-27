import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { urlFor } from "@/client/sanity-client";

const DownloadSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="py-8 md:py-14">
      <div id="download" />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-x-14 gap-y-8">
        <div className="w-full md:w-[300px] shrink-0 relative">
          <div className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]"></div>
          <Image
            src={urlFor(homeData.downloaFeatureImage).url()}
            alt="Download Feature"
            width={800}
            height={600}
            className="w-full h-auto relative z-10"
          />
        </div>
        <div>
          <div className="flex max-md:justify-center">
            <Badge>DOWNLOAD NOW</Badge>
          </div>
          <h2 className="text-2xl md:text-4xl uppercase font-agane max-md:text-center mt-5">
            {homeData.downloadTitle}
          </h2>
          <p className="opacity-80 my-2 max-md:text-center max-w-xl">
            {homeData.downloadDescription}
          </p>
          <div className="flex mt-10 items-center gap-5 md:gap-10 max-md:justify-center">
            <div className="relative">
              <Image
                src="/assets/qr-wrap.png"
                alt="QR Wrap"
                width={150}
                height={150}
                className="size-36"
              />
              <Image
                src={urlFor(homeData.downloaQr).url()}
                alt="QR Code"
                width={150}
                height={150}
                className="size-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={homeData.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/app-store.png"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                />
              </a>
              <a
                href={homeData.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/play-store.png"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
