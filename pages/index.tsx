import Carousel from '@/components/data-display/Carousel';
import React from 'react';

import { Accommodation, Destination } from '../components/combination';
import { NextPageWithLayout } from '../interfaces';
import { MainLayout } from '../layouts';

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
