import React from 'react'
import { NavBar } from "./NavBar";
import Portfolio from './projects/Portfolio';
import Footer from './Footer';

const Projects = () => {
  return (
	<div className='projects-display'>
		<NavBar />
		<Portfolio />
		<Footer />
	</div>
  )
}

export default Projects