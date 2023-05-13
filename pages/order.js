import React from 'react'
import Layout from './Layout'
import StoreLocation from '@/Components/Order/StoreLocation'
import OrderOptionFilter from '@/Components/Order/OrderOptionFilter'

const order = () => {
  return (
    <Layout>
      <StoreLocation/>
      <OrderOptionFilter/>
    </Layout>
  )
}

export default order