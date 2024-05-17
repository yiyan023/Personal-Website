import { React, useEffect} from 'react'
import { NavBar } from "./NavBar";
import { List } from './skills/List';
import Awards from './skills/Awards';
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
