import dynamic from "next/dynamic";
import SanityClient from "@/client/sanity-client";
import { REVALIDATE_TIME } from "@/constant";
import { FooterQuery, HomeQuery, NavQuery } from "@/graphql/LayoutQuery";
import { homeType, menuType } from "@/lib/types";

const HomeContent = dynamic(() => import("@/components/Home/HomeContent"));

const HomePage = ({
  navData,
  footerData,
  homeData,
}: {
  navData: menuType;
  footerData: menuType;
  homeData: homeType;
}) => {
  return (
    <HomeContent
      navData={navData}
      footerData={footerData}
      homeData={homeData}
    />
  );
};

export default HomePage;

export async function getStaticProps() {
  const navData = await SanityClient.fetch(NavQuery);
  const footerData = await SanityClient.fetch(FooterQuery);
  const homeData = await SanityClient.fetch(HomeQuery);

  return {
    props: {
      navData: navData,
      footerData: footerData,
      homeData: homeData,
    },
    revalidate: REVALIDATE_TIME,
  };
}
