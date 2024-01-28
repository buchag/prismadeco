import Image from 'next/image'
import About from '@/components/aboutUs/About'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
      <About />

    </main>
  )
}
