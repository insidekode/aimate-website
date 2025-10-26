import React from "react";
import { LazyMotion, domAnimation } from "motion/react";
import BaseSeo from "../Seo/BaseSeo";
import Navbar from "./Navbar";
import { menuType } from "@/lib/types";
import Footer from "./Footer";

const MainLayout = ({
  children,
  navData,
  footerData,
}: {
  children: React.ReactNode;
  navData: menuType;
  footerData: menuType;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <BaseSeo />
      <Navbar menus={navData?.menus} />
      {children}
      <Footer menus={footerData?.menus} />
    </LazyMotion>
  );
};

export default MainLayout;
