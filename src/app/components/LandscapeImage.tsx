import React from 'react';
import BackgroundImageLoader from './BackgroundImageLoader';

const LandscapeImage = ({ alt = '', src = '' }) => {
  return (
    <div className='relative aspect-[5/4] min-w-[50%] flex justify-center items-center p-12 lg:p-30 lg:group-hover:-translate-y-4 lg:group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
      <div className='absolute inset-0 overflow-hidden'>
        <BackgroundImageLoader alt={alt} src={src} />
      </div>
    </div>
  );
};

export default LandscapeImage;
