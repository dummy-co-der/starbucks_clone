import React from 'react'
import Navigation from '@/Components/Common/Navigation/Navigation'
import Banner from '@/Components/Giftpage/Banner'
import Featured from '@/Components/Giftpage/Featured'
import Footer from '@/Components/Common/Footer/Footer'
import Congratulations from '@/Components/Giftpage/Congratulations'

const Giftpage = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Featured />
      <Congratulations />
      <Footer />
    </>
  )
}

export default Giftpage