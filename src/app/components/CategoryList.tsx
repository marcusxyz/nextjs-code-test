import React from 'react';
import CategoryCard from './CategoryCard';
import { CategoryMockdataProps } from '../page';

interface CategoryListProps {
  categoryData: CategoryMockdataProps[];
}

const CategoryList = ({ categoryData = [] }: CategoryListProps) => {
  return (
    <section className='w-full'>
      <div className='hide-scrollbar flex w-full items-center justify-start gap-2 overflow-x-auto border-2 border-red-200 lg:min-h-[600px]'>
        {categoryData.map(({ id, categoryTitle }) => (
          <CategoryCard key={id} categoryTitle={categoryTitle} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
