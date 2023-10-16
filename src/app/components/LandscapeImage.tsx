import React from 'react';
import BackgroundImageLoader from './BackgroundImageLoader';
import { ImageProps } from '../types/general';

const LandscapeImage = ({ alt = '', src = '' }: ImageProps) => {
  return (
    <div className="lg:p-30 relative flex aspect-[5/4] min-w-[50%] items-center justify-center p-12 transition-all duration-300 ease-in-out lg:group-hover:-translate-y-4 lg:group-hover:shadow-2xl">
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundImageLoader alt={alt} src={src} />
      </div>
    </div>
  );
};

export default LandscapeImage;
