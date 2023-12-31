'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ImageProps } from '../types/general';

const BackgroundImageLoader = ({ alt = '', src = '' }: ImageProps) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <Image
      alt={alt}
      src={src}
      fill
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`duration-400 object-cover object-center ease-in-out
          ${
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default BackgroundImageLoader;
