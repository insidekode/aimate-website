import { DefaultSeo } from "next-seo";
import { OG_URL } from "@/constant";

const BaseSeo = () => {
  return (
    <DefaultSeo
      title="Brave"
      description="Brave"
      twitter={{
        cardType: "summary_large_image",
        handle: "@Brave",
      }}
      openGraph={{
        title: "Brave",
        description: "Brave",
        type: "website",
        locale: "en_IN",
        url: "Brave.com",
        site_name: "Brave",
        images: [
          {
            url: OG_URL,
            width: 1200,
            height: 630,
            alt: "Brave",
          },
        ],
      }}
    />
  );
};

export default BaseSeo;
