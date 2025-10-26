import dynamic from "next/dynamic";
import SanityClient from "@/client/sanity-client";
import { REVALIDATE_TIME } from "@/constant";
import { FooterQuery, NavQuery } from "@/graphql/Layout";
import { menuType } from "@/lib/types";

const HomeContent = dynamic(() => import("@/components/Home/HomeContent"));

const HomePage = ({
  navData,
  footerData,
}: {
  navData: menuType;
  footerData: menuType;
}) => {
  return <HomeContent navData={navData} footerData={footerData} />;
};

export default HomePage;

export async function getStaticProps() {
  const navData = await SanityClient.fetch(NavQuery);
  const footerData = await SanityClient.fetch(FooterQuery);

  return {
    props: {
      navData: navData,
      footerData: footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}
