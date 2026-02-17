'use client';

import { useState } from "react";

interface ServiceDetailImageProps {
  primarySrc: string;
  fallbackSrc: string;
  fallbackSrc2?: string;
  alt: string;
  className?: string;
}

export default function ServiceDetailImage({
  primarySrc,
  fallbackSrc,
  fallbackSrc2,
  alt,
  className,
}: ServiceDetailImageProps) {
  const [src, setSrc] = useState(primarySrc);
  const [attempt, setAttempt] = useState(0);

  const handleError = () => {
    if (attempt === 0) {
      setAttempt(1);
      setSrc(fallbackSrc);
    } else if (attempt === 1 && fallbackSrc2) {
      setAttempt(2);
      setSrc(fallbackSrc2);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
