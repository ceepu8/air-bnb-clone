import { Location } from '@/features/Location/Location';
import { NextPageWithLayout } from '@/interfaces';
import { MainLayout } from '@/layouts/main';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Location />
    </>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
