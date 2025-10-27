import Image from "next/image";
import StarIcon from "@/icon/StarIcon";
import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import { urlFor } from "@/client/sanity-client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import PlayIcon from "@/icon/PlayIcon";

const BannerSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="max-w-gutter mx-auto py-8 md:py-14 relative">
      <div className="bg-primary size-48 md:size-72 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]" />
      <div className="relative z-10">
        <div className="flex justify-center">
          <Badge>AI PARTNER</Badge>
        </div>
        <h2 className="text-3xl md:text-6xl uppercase font-agane text-center mt-5 max-w-5xl mx-auto">
          {homeData.heading}
        </h2>
        <p className="opacity-80 my-2 text-center max-w-2xl mx-auto">
          {homeData.subHeading}
        </p>
        <div className="flex items-center gap-5 justify-center mt-5">
          <a href="/#download" className="cursor-pointer">
            <Button>Download Now</Button>
          </a>
          <a href="/" className="cursor-pointer">
            <Button variant="outline">
              <PlayIcon />
              Play Video
            </Button>
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center mt-8">
          <div className="flex justify-center">
            {homeData?.review?.avatars.map((avatar, index) => (
              <Image
                key={index}
                src={urlFor(avatar).url()}
                alt={`User Avatar ${index + 1}`}
                width={40}
                height={40}
                className={cn(
                  "size-10 md:size-14 rounded-full border border-white object-cover",
                  index !== 0 ? "-ml-4 md:-ml-6" : ""
                )}
              />
            ))}
          </div>
          <div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i}>
                  <StarIcon />
                </div>
              ))}
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: homeData?.review?.description,
              }}
              className="text-center mt-1 text-sm opacity-90 [&_span]:font-bold [&_span]:text-primary [&_span]:uppercase"
            />
          </div>
        </div>
        <div className="flex items-center mt-8 md:mt-16 justify-center">
          <Image
            src={urlFor(homeData.appPreviews?.[0]?.previewImage).url()}
            alt={homeData.appPreviews?.[0]?.previewAltText}
            width={1920}
            height={1080}
            className="w-2/5 md:w-64 -mr-10"
          />
          <Image
            src={urlFor(homeData.appPreviews?.[0]?.previewImage).url()}
            alt={homeData.appPreviews?.[0]?.previewAltText}
            width={1920}
            height={1080}
            className="w-1/2 md:w-80 z-10"
          />
          <Image
            src={urlFor(homeData.appPreviews?.[0]?.previewImage).url()}
            alt={homeData.appPreviews?.[0]?.previewAltText}
            width={1920}
            height={1080}
            className="w-2/5 md:w-64 -ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
