import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const SanityClient = createClient({
  projectId: "kkeh9mch",
  dataset: "production",
  apiVersion: "2025-10-21",
  useCdn: false,
});

const builder = ImageUrlBuilder(SanityClient);

export const urlFor = (source: string) => {
  return builder.image(source);
};

export default SanityClient;
