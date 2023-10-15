import CategoryList from './components/CategoryList';
import Newsletter from './components/Newsletter';
import { categoryMockdata } from './mockData/categoryMockData';
import { newsletterMockdata } from './mockData/newsletterMockData';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:bg-[#f5f5f5] lg:p-12">
      {!!categoryMockdata.length && (
        <CategoryList categoryData={categoryMockdata} />
      )}
      {!!newsletterMockdata && <Newsletter content={newsletterMockdata} />}
    </main>
  );
};

export default Home;
