import Head from 'next/head'
import Image from 'next/image'

import PeopleTitle from '../components/MainPage/PeopleTitle.js';
import TopHeader from '../components/MainPage/TopHeader.js';
import SideMenu from '../components/MainPage/SideMenu.js';

const Home = ()=> {
  return (
    <main>
      <Head>
        <title>Radha Gram</title>
        <meta name="description" content="Telegram App I'm creating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
     		 	<TopHeader/>
      		<PeopleTitle/>
      		<SideMenu/>
    </main>
  )
}; 
export default Home;
