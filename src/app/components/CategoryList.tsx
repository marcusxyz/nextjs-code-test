import { CategoryListProps } from '../types/category';
import CategoryCard from './CategoryCard';

const CategoryList = ({ categoryData = [] }: CategoryListProps) => {
  return (
    <section className="w-full">
      <div className="hide-scrollbar flex w-full items-center justify-start gap-2 overflow-x-auto border-2 border-red-200 lg:py-20">
        {categoryData.map(({ id, categoryTitle, categoryImageUrl }) => (
          <CategoryCard
            key={id}
            categoryTitle={categoryTitle}
            categoryImageUrl={categoryImageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
