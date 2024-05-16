import React from 'react'
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { About } from "./About"
import Footer from './Footer';

const Home = () => {
  return (
	<div>
		<NavBar />
		<Banner />
		<About />
		<Footer />
	</div>
  )
}

export default Home