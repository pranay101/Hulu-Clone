import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../Components/Header/Header"
import Nav from "../Components/Nav/Nav"
import Results from "../Components/Results/Results"
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />  
      <Nav />
    </div>
  )
}

export default Home
