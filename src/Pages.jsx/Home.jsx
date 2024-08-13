import React from 'react'
import Nav from '../Components/Nav'
import Landing from '../Components/Landing'
import BurgerMenu from '../Components/BurgerMenu'
import Piñatas from '../Components/Piñatas'
import Themes from '../Components/Themes'
import Garlands from '../Components/Garlands'
import Decorations from '../Components/Decorations'
import Footer from '../Components/Footer'
import Shirts from '../Components/Shirts'

function Home() {
  
  return (
    <>
    <Nav />
    <BurgerMenu />
    <Landing/>
    <Piñatas/>
    <Themes/>
    <Garlands/>
    <Decorations/>
    <Shirts/>
    <Footer/>
    </>

  )
}

export default Home