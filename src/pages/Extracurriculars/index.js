import React from 'react'

import { NavBar } from "../../components/common/NavBar";
import ExtracurricularList from '../../components/sections/ExtracurricularList';
import Footer from '../../components/common/Footer';

const Extracurriculars = () => {
  return (
	<div>
		<NavBar />
		<ExtracurricularList />
		<Footer />
	</div>
  )
}

export default Extracurriculars;
