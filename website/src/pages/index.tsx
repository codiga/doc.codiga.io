import React from "react";
import Layout from "@theme/Layout";
import DescriptionCards from "../components/landing/DescriptionCards";
import Hero from "../components/landing/Hero";

export default () => {
  return (
    <Layout>
      <Hero />
      <DescriptionCards />
    </Layout>
  );
};
