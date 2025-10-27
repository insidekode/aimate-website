import { homeType, menuType } from "@/lib/types";
import MainLayout from "../Layout/MainLayout";
import SeoData from "../Seo/SeoData";
import HaveAnyQuestions from "./HaveAnyQuestions";
import FaqSection from "./FaqSection";
import ReviewSection from "./ReviewSection";
import DownloadSection from "./DownloadSection";
import QuoteSection from "./QuoteSection";
import FeaturesSection from "./FeaturesSection";

const HomeContent = ({
  navData,
  footerData,
  homeData,
}: {
  navData: menuType;
  footerData: menuType;
  homeData: homeType;
}) => {
  return (
    <MainLayout navData={navData} footerData={footerData}>
      <SeoData
        seoTitle={homeData.seo?.title}
        seoDescription={homeData.seo?.description}
        metaImage={homeData.seo?.image}
        url="/"
      />
      <div className="px-4">
        <QuoteSection homeData={homeData} />
        <FeaturesSection homeData={homeData} />
        <DownloadSection homeData={homeData} />
      </div>
      <ReviewSection homeData={homeData} />
      <div className="px-4">
        <FaqSection homeData={homeData} />
        <HaveAnyQuestions homeData={homeData} />
      </div>
    </MainLayout>
  );
};

export default HomeContent;
