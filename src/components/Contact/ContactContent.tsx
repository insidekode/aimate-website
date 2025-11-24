import { menuType } from "@/lib/types";
import MainLayout from "../Layout/MainLayout";

const ContactContent = ({
  navData,
  footerData,
}: {
  navData: menuType;
  footerData: menuType;
}) => {
  return (
    <MainLayout navData={navData} footerData={footerData}>
      ContactContent
    </MainLayout>
  );
};

export default ContactContent;
