import dynamic from "next/dynamic";
import SanityClient from "@/client/sanity-client";
import { REVALIDATE_TIME } from "@/constant";
import { FooterQuery, NavQuery } from "@/graphql/LayoutQuery";
import { menuType } from "@/lib/types";

const ContactContent = dynamic(
  () => import("@/components/Contact/ContactContent")
);

const ContactPage = ({
  navData,
  footerData,
}: {
  navData: menuType;
  footerData: menuType;
}) => {
  return <ContactContent navData={navData} footerData={footerData} />;
};

export default ContactPage;

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
