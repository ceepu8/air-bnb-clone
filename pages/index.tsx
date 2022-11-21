import { Accommodation, Destination } from '@/components/combination';
import { NextPageWithLayout } from '@/interfaces';
import { MainLayout } from '@/layouts/main';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Destination />
      <Accommodation />
    </>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
