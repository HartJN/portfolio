import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import About from '@/components/About'

// import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}
