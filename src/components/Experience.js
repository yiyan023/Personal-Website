import React from 'react'

import { NavBar } from "./NavBar";
import Work from './Work';
import Education from './Education'
import Events from './Events'
import Volunteer from './Volunteer';

const Experience = () => {
  return (
	<div>
		<NavBar />
		<Education />
		<Work />
		<Events />
		<Volunteer />
	</div>
  )
}

export default Experience;
