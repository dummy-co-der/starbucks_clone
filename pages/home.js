import React from 'react'
import Banner from '@/Components/Homepage/Banner'
import Curation from '@/Components/Homepage/Curation'
import Recommend from '@/Components/Homepage/Recommend'
import DiscoverMore from '@/Components/Homepage/DiscoverMore'
import SliderBannerList from '@/Components/Homepage/SliderBannerList'
import Store from '@/Components/Homepage/Store'
import Layout from '../Components/Layout'
import Head from 'next/head'

const Homepage = () => {
  return (
    <>
      <div>
      <Head>
      <title>Starbucks Home</title>
      </Head>
        <Layout>
          <Banner />
          <Curation />
          <SliderBannerList />
          <Recommend />
          <DiscoverMore />
          <Store />
        </Layout>
        </div>
    </>
  )
}

export default Homepage