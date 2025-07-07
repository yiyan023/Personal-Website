import React from 'react'
import { NavBar } from "../../components/common/NavBar";
import { Banner } from "../../components/sections/Banner";
import { About } from "../../components/sections/About"
import Footer from '../../components/common/Footer';

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