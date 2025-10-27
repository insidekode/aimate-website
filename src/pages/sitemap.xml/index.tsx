import SanityClient from "@/client/sanity-client";
import { SITE_URL } from "@/constant";
import { SitemapQuery } from "@/graphql/PageQuery";

type urlItem = {
  url: string;
};

function generateSiteMap(
  data: {
    slug: { current: string };
    id: number;
  }[]
) {
  const urls = data?.map((item) => {
    return {
      url: `${SITE_URL}/${item.slug.current}`,
    };
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
        ${urls
          ?.map((item: urlItem) => {
            return `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `;
          })
          .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }: any) {
  const data = await SanityClient.fetch(SitemapQuery);
  const sitemap = generateSiteMap(data);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
