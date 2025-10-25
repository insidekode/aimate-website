import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const PagesTopLoader = dynamic(
  () => import("nextjs-toploader").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const agane = localFont({
  src: [
    {
      path: "../fonts/Agane-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-agane",
});

const dmSans = localFont({
  src: [
    {
      path: "../fonts/DMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${agane.variable} ${dmSans.variable}`}>
      <PagesTopLoader color="#D0FD3E" showSpinner={false} />
      <Component {...pageProps} />
    </div>
  );
}
