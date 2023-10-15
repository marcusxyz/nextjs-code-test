import Link from 'next/link';
import BackgroundImageLoader from './BackgroundImageLoader';
import CardButton from './CardButton';
import { CategoryCardProps } from '../types/category';

const CategoryCard = ({
  categoryTitle = '',
  categoryImageUrl = '',
}: CategoryCardProps) => {
  return (
    <Link href="/" className="group w-full">
      <div className="lg:p-30 relative flex aspect-square min-w-[300px] items-center justify-center p-12 transition-all duration-300 ease-in-out lg:group-hover:-translate-y-4 lg:group-hover:shadow-2xl">
        <div className="absolute inset-0 overflow-hidden">
          <BackgroundImageLoader alt={categoryTitle} src={categoryImageUrl} />
        </div>
        <CardButton title={categoryTitle} />
      </div>
    </Link>
  );
};

export default CategoryCard;
