import CategoryList from './components/CategoryList';
import Newsletter from './components/Newsletter';

export interface CategoryMockdataProps {
  id: number;
  categoryTitle: string;
  categoryImageUrl?: string;
}

const categoryMockdata: CategoryMockdataProps[] = [
  {
    id: 1,
    categoryTitle: 'Man',
    categoryImageUrl: 'https://source.unsplash.com/nR6HpTfw4Fg',
  },
  {
    id: 2,
    categoryTitle: 'Dam',
    categoryImageUrl: 'https://source.unsplash.com/KP4bxnxAilU',
  },
  {
    id: 3,
    categoryTitle: 'Nyheter',
    categoryImageUrl: 'https://source.unsplash.com/yjnA9MxArGQ',
  },
  {
    id: 4,
    categoryTitle: 'Om Varg',
    categoryImageUrl: 'https://source.unsplash.com/maHb1ki_X3o',
  },
];

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4 lg:p-12'>
      {!!categoryMockdata.length && (
        <CategoryList categoryData={categoryMockdata} />
      )}
      <Newsletter />
    </main>
  );
};

export default Home;
