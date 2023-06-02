import React from "react";
import Layout from "../Components/Layout";
import StoreLocation from "@/Components/Order/StoreLocation";
import OrderOptionFilter from "@/Components/Order/OrderOptionFilter";
import Head from "next/head";

const order = () => {
  return (
    <div>
      <Head>
        <title>Starbucks|Order</title>
      </Head>
      <Layout>
        <StoreLocation />
        <OrderOptionFilter />
      </Layout>
    </div>
  );
};

export default order;
