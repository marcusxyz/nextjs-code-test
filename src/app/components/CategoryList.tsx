import React from 'react';
import CategoryCard from './CategoryCard';
import { CategoryMockdataProps } from '../page';

interface CategoryListProps {
  categoryData: CategoryMockdataProps[];
}

const CategoryList = ({ categoryData = [] }: CategoryListProps) => {
  return (
    <div className='h-auto flex flex-row gap-4'>
      {categoryData.map(({ id, categoryTitle }) => (
        <CategoryCard key={id} categoryTitle={categoryTitle} />
      ))}
    </div>
  );
};

export default CategoryList;
