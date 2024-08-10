import React from 'react'
import Banner from '../Components/Banner'
import GalleryCards from '../Components/GalleryCards'
import Footer from "../Components/Footer.jsx"

function PinatasPage() {
  return (
    <div>
      <Banner title="Piñatas"/>
      <h1 className='pages__header'>Welcome to the Piñatas page</h1>
      <GalleryCards/>
      <Footer />
    </div>
  )
}

export default PinatasPage