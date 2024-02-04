
    import Image from 'next/image'
    import { Inter } from 'next/font/google'
    import Carousel from '../components/carousel/carousel'
    import CardList from '@/components/cards/CardList'
    import Footer from "../components/footer/Footer"
    import {Component} from 'react'
    import axios from "axios";
    const inter = Inter({ subsets: ['latin'] })

    
    //const inter = Inter({ subsets: ['latin'] })
      
  const index = () => {
    return (
      <main>
        <Carousel/>

  
      <section>
        <CardList />
      </section>

      <Footer/>
      
  </main>
)
}
export default index