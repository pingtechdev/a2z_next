/**
 * Image optimization utilities
 * Provides optimized image loading with lazy loading and proper attributes
 */

export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

/**
 * Get optimized image attributes for better performance
 */
export const getOptimizedImageProps = (
  src: string,
  alt: string,
  options?: {
    loading?: "lazy" | "eager";
    fetchpriority?: "high" | "low" | "auto";
    isAboveFold?: boolean;
  }
): OptimizedImageProps => {
  const isAboveFold = options?.isAboveFold ?? false;
  
  return {
    src,
    alt,
    loading: options?.loading ?? (isAboveFold ? "eager" : "lazy"),
    fetchpriority: options?.fetchpriority ?? (isAboveFold ? "high" : "auto"),
    decoding: "async",
  };
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string): void => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  }
};
