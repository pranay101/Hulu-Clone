import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../Components/Header/Header"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />  
    </div>
  )
}

export default Home
