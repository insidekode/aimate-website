import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";

const ReviewSection = ({ homeData }: { homeData: homeType }) => {
  return (
    <div className="max-w-gutter mx-auto py-14">
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
    </div>
  );
};

export default ReviewSection;
