import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '../components/carousel/carousel'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main background-color='red'>
      <Carousel/>
    </main>
  )
}
