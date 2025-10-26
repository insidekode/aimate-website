export const NavQuery = `*[_type == "menu" && name == 'Header'][0]{
  name, 
  menus[]{
    title,
    url
  }
}`;

export const FooterQuery = `*[_type == "menu" && name == 'Footer'][0]{
  name, 
  menus[]{
    title,
    url
  }
}`;
