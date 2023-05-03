import React from 'react'
import Layout from './Layout'
import StoreLocation from '@/Components/Order/StoreLocation'
import OrderOptionFilter from '@/Components/Order/OrderOptionFilter'
import BestSeller from '@/Components/Order/BestSeller'
const order = () => {
  return (
    <Layout>
      <StoreLocation/>
      <OrderOptionFilter/>
      <BestSeller/>
    </Layout>
  )
}

export default order