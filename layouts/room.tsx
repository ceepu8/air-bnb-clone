import React, { useState } from 'react';
import { Accommodation, LayoutProps } from '@/interfaces';
import Header from '@/components/combination/Header';
import Footer from '@/components/combination/Footer';

type Props = {};

const RoomHeader = ({ room }: { room: Accommodation }) => {
  const { tenPhong } = room;
  return <></>;
};

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
