import React from 'react'

import { NavBar } from "../../components/common/NavBar";
import Work from '../../components/sections/Work';
import Extracurriculars from '../../components/sections/Extracurriculars';
import Footer from '../../components/common/Footer';

const Experience = () => {
  return (
	<div>
		<NavBar />
		<Work />
		<Extracurriculars />
		<Footer />
	</div>
  )
}

export default Experience;
