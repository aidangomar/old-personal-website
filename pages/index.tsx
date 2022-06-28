import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Titlebar from '../components/Titlebar'
import Navbar from '../components/Navbar'
import Text from '../components/Text'
import { Fade } from 'react-awesome-reveal'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aidan Gomar</title>
        <meta name="Personal Website" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Fade direction='down'>
        <Titlebar />
        <Text />
      </Fade>
    </div>
  )
}

export default Home
