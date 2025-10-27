import Marquee from "react-fast-marquee";
import Image from "next/image";
import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";
import DoubleQuote from "@/icon/DoubleQuote";
import { urlFor } from "@/client/sanity-client";
import PortableContent from "../Richtext/PortableContent";
import StarIcon from "@/icon/StarIcon";

const ReviewSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="py-8 md:py-14">
      <div id="reviews" />
      <div className="flex justify-center">
        <Badge>REVIEWS</Badge>
      </div>
      <h2 className="text-2xl md:text-4xl uppercase font-agane text-center mt-5">
        {homeData.reviewTitle}
      </h2>
      <p className="opacity-80 my-2 text-center max-w-xl mx-auto">
        {homeData.reviewDescription}
      </p>
      <div className="relative">
        <div className="gradient-review-section left-0" />
        <div className="gradient-review-section right-0 rotate-180" />
        <Marquee className="mt-11" pauseOnHover>
          {homeData?.reviews?.map((item, index) => (
            <div
              className="card-sahdow p-7 rounded-md bg-card-background mx-2.5 relative w-xs"
              key={index}
            >
              <div className="absolute top-4 right-3">
                <DoubleQuote />
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={urlFor(item.avatar).url()}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover size-12 shrink-0"
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <div key={i}>
                        <StarIcon />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="prose-p:opacity-80 mt-2 prose-p:leading-5 prose-p:text-sm h-20 overflow-y-scroll">
                <PortableContent content={item.review} />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ReviewSection;
