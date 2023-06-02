import React from "react";
import Blog from "@/Components/Blogspage/Blog";
import Layout from "../Components/Layout";
import Head from "next/head";

const store = () => {
  return (
    <>
    <Head>
    <title>Starbucks|Store</title>
  </Head>
    <Layout>
      <Blog />
    </Layout>
    </>
  );
};

export default store;
