import React from 'react'

import { NavBar } from "./NavBar";
import Work from './Work';
import Education from './Education'
import Volunteer from './Volunteer';
import Footer from './Footer';

const Experience = () => {
  return (
	<div>
		<NavBar />
		<Education />
		<Work />
		<Volunteer />
		<Footer />
	</div>
  )
}

export default Experience;
