import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { urlFor } from "@/client/sanity-client";
import StarIcon from "@/icon/StarIcon";
import { cn } from "@/lib/utils";

const FeaturesSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="max-w-gutter mx-auto py-8 md:py-14">
      <div id="features" />
      <div className="flex justify-center">
        <Badge>FEATURES</Badge>
      </div>
      <h2 className="text-2xl md:text-4xl uppercase font-agane text-center mt-5">
        {homeData.featuresHeading}
      </h2>
      <p className="opacity-80 my-2 text-center max-w-xl mx-auto">
        {homeData.faqDescription}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
        <div className="fratures-card h-[554px] overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-agane text-center text-2xl">
              {homeData.featuresItems?.[0]?.title}
            </h3>
            <p className="font-light text-center opacity-70">
              {homeData.featuresItems?.[0]?.description}
            </p>
            <Image
              src={urlFor(homeData.featuresItems?.[0]?.previewImage).url()}
              alt={homeData.featuresItems?.[0]?.title}
              width={400}
              height={300}
              className="mt-2 w-[285px] h-auto mx-auto"
            />
          </div>
          <div className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]" />
        </div>
        <div className="flex flex-col gap-7">
          <div className="fratures-card h-[262px] flex flex-col items-center justify-center">
            <div className="flex justify-center">
              {homeData?.review?.avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={urlFor(avatar).url()}
                  alt={`User Avatar ${index + 1}`}
                  width={40}
                  height={40}
                  className={cn(
                    "size-10 rounded-full border border-white object-cover",
                    index !== 0 ? "-ml-3" : ""
                  )}
                />
              ))}
            </div>
            <p className="font-black text-[40px] text-center my-2">
              {homeData?.review?.totalUsers}+
            </p>
            <div className="flex gap-1 justify-center">
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
              className="text-center mt-3 text-sm opacity-90 [&_span]:font-bold [&_span]:text-primary [&_span]:uppercase"
            />
          </div>
          <div className="fratures-card h-[262px]">
            <h3 className="font-agane text-center text-2xl">
              {homeData.featuresItems?.[1]?.title}
            </h3>
            <p className="font-light text-center opacity-70">
              {homeData.featuresItems?.[1]?.description}
            </p>
            <Image
              src={urlFor(homeData.featuresItems?.[1]?.previewImage).url()}
              alt={homeData.featuresItems?.[1]?.title}
              width={400}
              height={300}
              className="mt-2 w-[285px] h-auto mx-auto"
            />
          </div>
        </div>
        <div className="fratures-card h-[554px] overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-agane text-center text-2xl">
              {homeData.featuresItems?.[2]?.title}
            </h3>
            <p className="font-light text-center opacity-70">
              {homeData.featuresItems?.[2]?.description}
            </p>
            <Image
              src={urlFor(homeData.featuresItems?.[2]?.previewImage).url()}
              alt={homeData.featuresItems?.[2]?.title}
              width={400}
              height={300}
              className="mt-2 w-[285px] h-auto mx-auto"
            />
          </div>
          <div className="bg-primary size-48 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full blur-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
