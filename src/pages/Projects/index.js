import React from 'react'
import { NavBar } from "../../components/common/NavBar";
import Portfolio from '../../components/sections/Portfolio';
import Footer from '../../components/common/Footer';

const Projects = () => {
  return (
	<div className='projects'>
		<NavBar />
		<Portfolio />
		<Footer />
	</div>
  )
}

export default Projects