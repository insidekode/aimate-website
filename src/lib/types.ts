export type menuItem = {
  title: string;
  url: string;
};

export type menuType = {
  name: string;
  menus: menuItem[];
};

export type seoType = {
  title: string;
  description: string;
  image: string;
};

export type staticType = {
  title: string;
  slug: {
    current: string;
  };
  heading: string;
  subHeading: string;
  content: any[];
  seo: seoType;
};

export type homeType = {
  seo: seoType;
  title: string;
  heading: string;
  subHeading: string;
  appPreviews: {
    previewImage: string;
    previewAltText: string;
  }[];
  quoteContent: any[];
  featuresHeading: string;
  featuresSubHeading: string;
  featuresItems: {
    title: string;
    description: string;
    previewImage: string;
  }[];
  review: {
    title: string;
    description: string;
    totalUsers: number;
    avatars: string[];
  };
  reviewTitle: string;
  reviewDescription: string;
  reviews: {
    _id: string;
    name: string;
    avatar: string;
    rating: number;
    review: any[];
  }[];
  downloadTitle: string;
  downloadDescription: string;
  downloaFeatureImage: string;
  downloaQr: string;
  playStoreLink: string;
  appStoreLink: string;
  faqTitle: string;
  faqDescription: string;
  faqs: {
    _id: string;
    question: string;
    answer: any[];
  }[];
  haveQnTitle: string;
  haveQnSubTitle: string;
  haveQnDescription: string;
};
