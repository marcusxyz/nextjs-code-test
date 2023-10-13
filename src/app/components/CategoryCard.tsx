import React from 'react';

interface CategoryCardProps {
  categoryTitle: string;
}

const CategoryCard = ({ categoryTitle = '' }: CategoryCardProps) => {
  return (
    <div className='aspect-square bg-red-200'>
      <h2 className='text-2xl'>{categoryTitle}</h2>
    </div>
  );
};

export default CategoryCard;
