import styles from "./Image.module.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  srcSet?: string;
  sizes?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  onClick,
  srcSet,
  sizes,
}) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`${styles.Img || ""} ${className || ""}`}
      onClick={onClick}
    />
  );
};
