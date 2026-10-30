import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { trackPageView, trackScrollDepth } from "@/lib/analytics";

const GA_MEASUREMENT_ID = "G-DM5ES26106";

const PagesTopLoader = dynamic(
  () => import("nextjs-toploader").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const nohemi = localFont({
  src: [
    {
      path: "../fonts/Nohemi-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (pagePath: string) => {
      trackPageView(pagePath);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrollPercent = Math.floor(
        (window.scrollY / scrollableHeight) * 100
      );

      thresholds.forEach((threshold) => {
        if (scrollPercent < threshold || trackedThresholds.has(threshold)) {
          return;
        }

        trackedThresholds.add(threshold);
        trackScrollDepth(threshold, router.asPath);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.asPath]);

  return (
    <div className={`${nohemi.variable} ${dmSans.variable}`}>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.gtag = function(){window.dataLayer.push(arguments);};
window.gtag("js", new Date());
window.gtag("config", "${GA_MEASUREMENT_ID}", { send_page_view: false });
var analyticsPath =
  window.location.pathname === "/"
    ? "/homepage-aimate"
    : window.location.pathname + window.location.search;
window.gtag("event", "page_view", {
  page_location: window.location.origin + analyticsPath,
  page_title: document.title
});`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <PagesTopLoader color="#D0FD3E" showSpinner={false} />
      <Component {...pageProps} />
    </div>
  );
}
