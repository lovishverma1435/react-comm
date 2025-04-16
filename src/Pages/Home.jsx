import React from 'react'
import Banner from "../Home/Banner"
import Bannerproducts from '../Home/bannerproducts'
import BestSeller from '../Home/BestSeller'
import bestsells from "../json/bestsellimg.json"
import adidasshoe from "../json/adidasshoe.json"
import Adidasshoe from "../Home/Adidasshoes"
import Shipping from '../Home/Shipping'
import Latest from "../Home/Latestnews"
import Featured from "../Home/Featuredprod"

const Home = () => {
  return (
    <>
    <Banner/>
    <Bannerproducts/>
    <BestSeller info={"BEST SELLER"}/>
    <Adidasshoe data={adidasshoe}/>
    <Shipping/>
    <Latest/>
    <Featured/>
    </>
  )
}

export default Home
