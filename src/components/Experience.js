import React from 'react'

import { NavBar } from "./NavBar";
import Work from './Work';
import Education from './Education'
import Volunteer from './Volunteer';
import GraphicDesign from './GraphicDesign';

const Experience = () => {
  return (
	<div>
		<NavBar />
		<Education />
		<Work />
		<Volunteer />
		<GraphicDesign />
	</div>
  )
}

export default Experience;
