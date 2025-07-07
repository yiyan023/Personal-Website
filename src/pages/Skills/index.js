import { React } from 'react'
import { NavBar } from "../../components/common/NavBar";
import { List } from '../../components/sections/SkillList';
import Awards from '../../components/sections/Awards';
import Footer from '../../components/common/Footer';

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
