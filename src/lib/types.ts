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
