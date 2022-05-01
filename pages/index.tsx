import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../Components/Header/Header"
import Nav from "../Components/Nav/Nav"
import Results from "../Components/Results/Results"
import requests from '../Utilis/requests'
const Home: NextPage = (props) => {
  console.log(props);
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

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url}|| ${requests.fetchTrending.url}`)
  .then(res => res.json());

  return {
    props:{
      results:request.results,
    },
  };
}

export default Home
