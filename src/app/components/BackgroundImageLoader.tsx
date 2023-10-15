// Use client on this component
'use client';
import Image from 'next/image';
import { useState } from 'react';

const BackgroundImageLoader = ({ alt = '', src = '' }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt={alt}
      src={src}
      fill
      loading="lazy"
      objectFit="cover"
      objectPosition="center"
      className={`duration-400 ease-in-out
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
