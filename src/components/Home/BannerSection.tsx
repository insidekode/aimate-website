import Image from "next/image";
import StarIcon from "@/icon/StarIcon";
import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import { urlFor } from "@/client/sanity-client";
import { cn } from "@/lib/utils";

const BannerSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="max-w-gutter mx-auto py-8 md:py-14">
      <div className="flex justify-center">
        <Badge>AI PARTNER</Badge>
      </div>
      <h2 className="text-3xl md:text-6xl uppercase font-agane text-center mt-5 max-w-5xl mx-auto">
        {homeData.heading}
      </h2>
      <p className="opacity-80 my-2 text-center max-w-2xl mx-auto">
        {homeData.subHeading}
      </p>
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
                "size-14 rounded-full border border-white object-cover",
                index !== 0 ? "-ml-6" : ""
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
    </div>
  );
};

export default BannerSection;
