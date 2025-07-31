import { NextPage } from "next";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}></Suspense>
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
