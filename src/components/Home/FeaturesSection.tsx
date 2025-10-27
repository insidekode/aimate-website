import { homeType } from "@/lib/types";
import { Badge } from "../ui/badge";

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
        <div className="fratures-card"></div>
        <div className="flex flex-col gap-7">
          <div className="fratures-card "></div>
          <div className="fratures-card"></div>
        </div>
        <div className="fratures-card"></div>
      </div>
    </div>
  );
};

export default FeaturesSection;
