

    import Image from 'next/image'
    import About from '@/components/aboutUs/About'
    import Us from '@/components/aboutUs/Us'
    import { Inter } from 'next/font/google'
    import Carousel from '../components/carousel/carousel'
    import CardList from '@/components/cards/CardList'
    import Footer from "../components/footer/Footer"
    import {Component} from 'react'
    import axios from "axios";
    import Home from '@/components/home/Home'
    const inter = Inter({ subsets: ['latin'] })

    
    //const inter = Inter({ subsets: ['latin'] })
      
  const index = () => {
    return (
      <main>
        <Home/>
        <Carousel/>
        <About/>

      <section>
        <CardList />
      </section>
      <Us />

      <Footer/>
      
  </main>
)

}
export default index