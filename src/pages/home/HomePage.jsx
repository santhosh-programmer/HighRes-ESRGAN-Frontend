import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import SliderComponent from './components/SliderComponent'
import ImageUpload from './components/ImageUpload'
import InfoComponent from './components/InfoComponent'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

const HomePage = () => {
  return (
    <>
        <HeaderComponent/>
        <SliderComponent/>
        <ImageUpload/>
        <InfoComponent/>
        <TechStack/>
        <Footer/>
    </>
  )
}

export default HomePage