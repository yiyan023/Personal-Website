import React from 'react'

import { NavBar } from "./NavBar";
import Work from './experiences/Work';
import Volunteer from './experiences/Volunteer';
import Footer from './Footer';

const Experience = () => {
  return (
	<div>
		<NavBar />
		<Work />
		<Volunteer />
		<Footer />
	</div>
  )
}

export default Experience;
