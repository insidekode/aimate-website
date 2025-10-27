export const StaticPageQuery = (
  slug: string
) => `*[_type == "pages" && slug.current == '${slug}'][0]{
  title,
  slug,
  heading,
  subHeading,
  content,
  seo{
    title,
    description,
    image
  }
}`;
