import Destination from '@/components/combination/Destination';
import Carousel from '@/components/data-display/carousel/Carousel';
import React from 'react';

import { Room } from '../components/combination/Room';
import { NextPageWithLayout } from '../interfaces';
import { MainLayout } from '../layouts';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Carousel />
      <Destination />
      <Room />
    </>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
