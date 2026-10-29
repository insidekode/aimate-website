type GoogleAnalyticsWindow = Window & {
  gtag?: (...args: [string, string, Record<string, string>?]) => void; // eslint-disable-line no-unused-vars
};

export const trackEarlyAccessClick = () => {
  if (typeof window === "undefined") return;

  (window as GoogleAnalyticsWindow).gtag?.("event", "early_access_click", {
    link_url: "https://forms.gle/RsQdQedp9Sseh1no7",
    placement: "hero",
  });
};
