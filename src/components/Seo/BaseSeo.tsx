import { DefaultSeo } from "next-seo";
import { OG_URL } from "@/constant";

const BaseSeo = () => {
  return (
    <DefaultSeo
      title="AIMate"
      description="AIMate"
      twitter={{
        cardType: "summary_large_image",
        handle: "@AIMate",
      }}
      openGraph={{
        title: "AIMate",
        description: "AIMate",
        type: "website",
        locale: "en_IN",
        url: "AIMate.com",
        site_name: "AIMate",
        images: [
          {
            url: OG_URL,
            width: 1200,
            height: 630,
            alt: "AIMate",
          },
        ],
      }}
    />
  );
};

export default BaseSeo;
