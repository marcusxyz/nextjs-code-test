import React from 'react';

const CardButton = ({ title = '' }) => {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='lg:relative p-6 border-4 border-orange-500 lg:border-transparent lg:group-hover:border-orange-500 transition-all duration-200 transform ease-in translate-y-0'>
        <h2 className='text-2xl uppercase lg:absolute lg:inset-[56px] flex items-center justify-center text-orange-500 lg:text-white transition-transform duration-400 ease-in-out transform translate-y-0 lg:group-hover:-translate-y-8 group-hover:text-orange-500'>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardButton;
