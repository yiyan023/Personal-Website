import React from 'react'
import { NavBar } from "./NavBar";
import { Banner } from "./homepage/Banner";
import { About } from "./homepage/About"
import Footer from './Footer';

const Home = () => {
  return (
	<div className='home'>
		<NavBar />
		<Banner />
		<About />
		<Footer />
	</div>
  )
}

export default Home