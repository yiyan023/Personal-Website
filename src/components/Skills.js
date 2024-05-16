import { React, useEffect} from 'react'
import { NavBar } from "./NavBar";
import { List } from './List';
import Awards from './Awards';
import Footer from './Footer';

const Skills = () => {
	return (
		<div className="skill" id="skill">
			<NavBar />
			<List />
			<Awards />
			<Footer />
		</div>
	)
}

export default Skills
