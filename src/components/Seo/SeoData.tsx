import { NextSeo } from "next-seo";

import { SITE_URL, OG_URL } from "@/constant";

type SeoDataProps = {
  seoTitle: string;
  seoDescription: string;
  url: string;
  metaImage?: string;
  metaImageAlt?: string;
  ogType?: string;
  publishDate?: string;
  noindex?: boolean;
  nofollow?: boolean;
};

const SeoData = ({
  seoTitle,
  seoDescription,
  url,
  metaImage,
  metaImageAlt,
  ogType,
  publishDate,
  noindex = false,
  nofollow = false,
}: SeoDataProps) => {
  const SEO = {
    title: seoTitle,
    description: seoDescription,
    canonical: `${SITE_URL}${url}`,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `${SITE_URL}${url}`,
      type: ogType,
      publishedTime: publishDate,
      images: [
        {
          url: metaImage ? metaImage : OG_URL,
          alt: metaImageAlt || seoTitle,
        },
      ],
    },
  };

  return <NextSeo {...SEO} noindex={noindex} nofollow={nofollow} />;
};

export default SeoData;
