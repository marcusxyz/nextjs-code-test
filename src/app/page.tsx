import CategoryList from './components/CategoryList';
import Newsletter from './components/Newsletter';
import { categoryMockData } from './mockData/categoryMockData';
import { newsletterMockData } from './mockData/newsletterMockData';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:bg-[var(--background-desktop)] lg:p-12">
      {!!categoryMockData?.length && (
        <CategoryList categoryData={categoryMockData} />
      )}
      {!!newsletterMockData && <Newsletter content={newsletterMockData} />}
    </main>
  );
};

export default Home;
