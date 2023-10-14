import Link from 'next/link';
import BackgroundImageLoader from './BackgroundImageLoader';
import CardButton from './CardButton';

interface CategoryCardProps {
  categoryTitle: string;
  categoryImageUrl: string;
}

const CategoryCard = ({
  categoryTitle = '',
  categoryImageUrl = '',
}: CategoryCardProps) => {
  return (
    <Link href='/' className='w-full group'>
      <div className='relative aspect-square min-w-[300px] flex justify-center items-center p-12 lg:p-30 lg:group-hover:-translate-y-4 lg:group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
        <div className='absolute inset-0 overflow-hidden'>
          <BackgroundImageLoader alt={categoryTitle} src={categoryImageUrl} />
        </div>
        <CardButton title={categoryTitle} />
      </div>
    </Link>
  );
};

export default CategoryCard;
