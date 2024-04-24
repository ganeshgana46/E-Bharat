import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testmonial from '../../components/testmonial/Testmonial'
import Loader from '../../components/loader/Loader'

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testmonial/>
        <Loader/>
    </Layout>
  )
}

export default HomePage