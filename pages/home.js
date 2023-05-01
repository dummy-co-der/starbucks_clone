import React from 'react'
import Banner from '@/Components/Homepage/Banner'
import Curation from '@/Components/Homepage/Curation'
import Recommend from '@/Components/Homepage/Recommend'
import Footer from '@/Components/Common/Footer/Footer'
import DiscoverMore from '@/Components/Homepage/DiscoverMore'
import SliderBanner from '@/Components/Homepage/SliderBanner'
import Layout from './Layout'

const Homepage = () => {
  return (
    <>
      <Layout>
      <Banner />
      <Curation />
      <SliderBanner/>
      <Recommend />
      <DiscoverMore />
      </Layout>
    </>
  )
}

export default Homepage