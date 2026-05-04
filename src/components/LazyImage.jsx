import { useEffect, useRef, useState } from "react";

export const LazyImage = ({
  src,
  alt,
  className = "",
  placeholderSrc = null,
  width,
  height,
}) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "50px" },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-70"} transition-opacity duration-300`}
      onLoad={() => setIsLoaded(true)}
      decoding="async"
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
