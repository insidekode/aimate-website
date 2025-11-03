import { menuType, staticType } from "@/lib/types";
import MainLayout from "../Layout/MainLayout";
import SeoData from "../Seo/SeoData";
import PortableContent from "../Richtext/PortableContent";

const StaticContent = ({
  navData,
  footerData,
  staticData,
}: {
  navData: menuType;
  footerData: menuType;
  staticData: staticType;
}) => {
  return (
    <MainLayout navData={navData} footerData={footerData}>
      <SeoData
        seoTitle={staticData.seo?.title}
        seoDescription={staticData.seo?.description}
        metaImage={staticData.seo?.image}
        url={staticData.slug.current}
      />
      <div className="max-w-gutter mx-auto px-4 py-5">
        <h1 className="text-3xl md:text-5xl uppercase font-nohemi text-center mb-5">
          {staticData.heading}
        </h1>
        <PortableContent content={staticData.content} />
      </div>
    </MainLayout>
  );
};

export default StaticContent;
