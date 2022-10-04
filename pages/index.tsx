import Carousel from "@/components/Carousel/Carousel";
import Destination from "@/components/Destination/Destination";
import React from "react";

import { Room } from "../components/Room/Room";
import { NextPageWithLayout } from "../interfaces";
import { MainLayout } from "../layouts";

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
