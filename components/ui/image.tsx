/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes } from 'react';

/**
 * Image Component
 * 
 * Wrapper simples para imagens. Em um projeto real com Next.js,
 * isso seria substituído por next/image, mas como estamos usando
 * React puro com Vite, usamos um img tag simples.
 */
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function Image({ src, alt, width, height, className, ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}
