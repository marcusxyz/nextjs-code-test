import CategoryList from './components/CategoryList';
import Newsletter from './components/newsletter';

export interface CategoryMockdataProps {
  id: number;
  categoryTitle: string;
}

const CategoryMockdata: CategoryMockdataProps[] = [
  {
    id: 1,
    categoryTitle: 'Man',
  },
  {
    id: 2,
    categoryTitle: 'Dam',
  },
  {
    id: 3,
    categoryTitle: 'Nyheter',
  },
  {
    id: 4,
    categoryTitle: 'Om Varg',
  },
];

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {!!CategoryMockdata.length && (
        <CategoryList categoryData={CategoryMockdata} />
      )}
      <Newsletter />
    </main>
  );
};

export default Home;
