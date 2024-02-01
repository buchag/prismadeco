
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '../components/carousel/carousel'

//const inter = Inter({ subsets: ['latin'] })


import CardList from '@/components/cards/CardList'

const index = () => {

  return (
    <main>
      <Carousel/>

    <section>
      <CardList />
    </section>
</main>
  )
}

export default index