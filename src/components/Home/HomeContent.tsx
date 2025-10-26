import { homeType, menuType } from "@/lib/types";
import MainLayout from "../Layout/MainLayout";
import SeoData from "../Seo/SeoData";
import HaveAnyQuestions from "./HaveAnyQuestions";
import FaqSection from "./FaqSection";

const HomeContent = ({
  navData,
  footerData,
  homeData,
}: {
  navData: menuType;
  footerData: menuType;
  homeData: homeType;
}) => {
  console.log(homeData);
  return (
    <MainLayout navData={navData} footerData={footerData}>
      <SeoData
        seoTitle={homeData.seo?.title}
        seoDescription={homeData.seo?.description}
        metaImage={homeData.seo?.image}
        url="/"
      />
      <div className="px-4">
        <FaqSection homeData={homeData} />
        <HaveAnyQuestions homeData={homeData} />
      </div>
    </MainLayout>
  );
};

export default HomeContent;
