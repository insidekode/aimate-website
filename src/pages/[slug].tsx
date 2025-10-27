import dynamic from "next/dynamic";
import { REVALIDATE_TIME } from "@/constant";
import SanityClient from "@/client/sanity-client";
import { FooterQuery, NavQuery } from "@/graphql/LayoutQuery";
import { StaticPageQuery } from "@/graphql/PageQuery";
import { menuType, staticType } from "@/lib/types";

const StaticContent = dynamic(
  () => import("@/components/Static/StaticContent")
);

const FaqPage = ({
  navData,
  footerData,
  staticData,
}: {
  navData: menuType;
  footerData: menuType;
  staticData: staticType;
}) => {
  console.log(staticData);

  return (
    <StaticContent
      navData={navData}
      footerData={footerData}
      staticData={staticData}
    />
  );
};

export default FaqPage;

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const navData = await SanityClient.fetch(NavQuery);
  const footerData = await SanityClient.fetch(FooterQuery);
  const pageData = await SanityClient.fetch(StaticPageQuery(params.slug));

  if (pageData == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      navData: navData,
      footerData: footerData,
      staticData: pageData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});
