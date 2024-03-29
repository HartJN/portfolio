import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'

// import styles from './page.module.css'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
