type GoogleAnalyticsWindow = Window & {
  gtag?: (...args: [string, string, Record<string, string>?]) => void; // eslint-disable-line no-unused-vars
};

const getAnalyticsPath = (pagePath: string) => {
  const url = new URL(pagePath, window.location.origin);
  if (url.pathname === "/") url.pathname = "/homepage-aimate";
  return `${url.pathname}${url.search}${url.hash}`;
};

export const trackEarlyAccessClick = () => {
  if (typeof window === "undefined") return;

  (window as GoogleAnalyticsWindow).gtag?.("event", "early_access_click", {
    link_url: "https://forms.gle/RsQdQedp9Sseh1no7",
    placement: "hero",
  });
};

export const trackPageView = (pagePath: string) => {
  if (typeof window === "undefined") return;

  const analyticsPath = getAnalyticsPath(pagePath);
  (window as GoogleAnalyticsWindow).gtag?.("event", "page_view", {
    page_location: window.location.origin + analyticsPath,
    page_title: document.title,
  });
};

export const trackScrollDepth = (percent: number, pagePath: string) => {
  if (typeof window === "undefined") return;

  const analyticsPath = getAnalyticsPath(pagePath);
  (window as GoogleAnalyticsWindow).gtag?.("event", "scroll_depth", {
    percent_scrolled: String(percent),
    page_location: window.location.origin + analyticsPath,
    page_path: analyticsPath,
    page_title: document.title,
  });
};
