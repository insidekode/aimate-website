import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("@/components/Home/HomeContent"));

const HomePage = () => {
  return <HomeContent />;
};

export default HomePage;
