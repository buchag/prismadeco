import Image from 'next/image'
import About from '@/components/aboutUs/About'
import Us from '@/components/aboutUs/Us'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
      <About />
      <Us />

    </main>
  )
}
