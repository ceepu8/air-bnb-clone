import React, { useState } from 'react';
import { LayoutProps } from '@/interfaces';
import Header from '@/components/combination/Header';
import Footer from '@/components/combination/Footer';

type Props = {};

const RoomLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RoomLayout;
