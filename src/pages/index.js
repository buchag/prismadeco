
import Image from 'next/image'
import About from '@/components/aboutUs/About'
import Us from '@/components/aboutUs/Us'
import { Inter } from 'next/font/google'
import Carousel from '../components/carousel/carousel'

//const inter = Inter({ subsets: ['latin'] })


import CardList from '@/components/cards/CardList'

const index = () => {

  return (
    <main>
      <Carousel/>
      <About />
    <section>
      <CardList />
    </section> 
    <Us />
</main>
  )
}

export default index