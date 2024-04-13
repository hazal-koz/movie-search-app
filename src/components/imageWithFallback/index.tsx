import Image, { ImageProps } from "next/image";

const ImageWithFallback = (props: ImageProps) => {
  const { src, alt, ...rest } = props;

  const fallbackSrc =
    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

  const isValidSrc =
    typeof src === "string" &&
    src !== "N/A" &&
    (src.startsWith("/") ||
      src.startsWith("http://") ||
      src.startsWith("https://"));

  if (!isValidSrc) {
    return <Image src={fallbackSrc} alt={alt} {...rest} />;
  }

  return <Image {...rest} src={src} alt={alt} />;
};

export default ImageWithFallback;
