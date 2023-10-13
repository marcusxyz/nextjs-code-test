// Use client on this component
'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageLoader = ({ alt = '', src = '' }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='border-5 border-blue-700 absolute inset-0 w-full h-full object-cover object-center z-[-1] overflow-hidden duration-700 ease-in-out'>
      <Image
        alt={alt}
        src={src}
        fill
        loading='lazy'
        objectFit='cover'
        objectPosition='center'
        className={`duration-400 ease-in-out
        ${
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageLoader;
