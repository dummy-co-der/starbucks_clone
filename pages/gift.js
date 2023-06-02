import React from "react";
import Banner from "@/Components/Giftpage/Banner";
import Layout from "../Components/Layout";
import Head from "next/head";

const gift = () => {
  return (
    <>
      <div>
        <Head>
          <title>Starbucks|Gift</title>
        </Head>
        <Layout>
          <Banner />
        </Layout>
      </div>
    </>
  );
};

export default gift;
