import React from "react";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/client/sanity-client";
import Image from "next/image";

const PortableContent = ({ content }: { content: any[] }) => {
  return (
    <div className="max-w-full prose richtext text-white font-dm-sans">
      <PortableText
        value={content}
        components={{
          types: {
            image: RenderImage,
          },
          block: {
            blockquote: ({ children }) => (
              <blockquote className="tag-green">{children}</blockquote>
            ),
          },
        }}
      />
    </div>
  );
};

export default PortableContent;

const RenderImage = ({ value }: { value: any }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={urlFor(value).width(width).height(height).url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        aspectRatio: width / height,
      }}
      height={height}
      width={width}
    />
  );
};
