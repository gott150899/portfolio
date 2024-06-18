import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Main from '@/components/Main'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // console.log(window)
  useEffect(() =>{
    const tele = window ? (window as any).Telegram.WebApp : undefined;
    // tele.ready()
    if(tele) tele.ready()
  })
  return (
    <>
      <Head>
        <title>Tran Ty Go | Full-Stack Developer</title>
        <meta property="og:title" content="Tran Ty Go | Full-Stack Developer"/>
        <meta name="description" content="I'm Full-Stack Developer with ReactJS and NextJS experiences"/>
        <meta property="og:description" content="I'm Full-Stack Developer with ReactJS and NextJS experiences"/>
        <meta property="og:url" content={process.env.ROOT_URL}/>
        <meta property='og:image' content={`${process.env.ROOT_URL}/assets/avatar.jpg`} />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <Main />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  )
}
