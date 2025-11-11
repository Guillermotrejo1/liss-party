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
import Contact from '../Components/UI/Contact'
import Showcase from '../Components/Showcase'

function Home() {
  
  return (
    <>
    <Nav />
    <BurgerMenu />
    <Contact/>
    <Landing/>
    <Showcase/>
    <Shirts/>
    <Piñatas/>
    <Garlands/>
    <Decorations/>
    <Themes/>
    <Footer/>
    </>

  )
}

export default Home