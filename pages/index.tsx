import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Main from '@/components/Main'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tran Ty Go | Front-End Developer</title>
        <meta property="og:title" content="Tran Ty Go | Front-End Developer"/>
        <meta name="description" content="I'm Front-End Developer with ReactJS and NextJS experiences"/>
        <meta property="og:description" content="I'm Front-End Developer with ReactJS and NextJS experiences"/>
        <meta property="og:url" content={process.env.ROOT_URL}/>
        <meta property='og:image' content={`${process.env.ROOT_URL}/assets/avatar.jpg`} />
      </Head>
      <Main />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  )
}
