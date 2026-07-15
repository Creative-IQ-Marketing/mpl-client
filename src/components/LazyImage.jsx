import { useState } from "react";

/**
 * OptimizedImage — native lazy loading, optional priority for LCP,
 * never hides content behind opacity gates.
 */
export function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  sizes,
  srcSet,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
}) {
  const [loaded, setLoaded] = useState(false);
  const isEager = loading === "eager" || fetchPriority === "high";

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={isEager ? "eager" : "lazy"}
      fetchPriority={fetchPriority}
      decoding={decoding}
      onLoad={() => setLoaded(true)}
      className={className}
      style={loaded ? undefined : { contentVisibility: "auto" }}
    />
  );
}

/** @deprecated Use OptimizedImage — kept as alias for existing imports */
export const LazyImage = OptimizedImage;

export default OptimizedImage;
