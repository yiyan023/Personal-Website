import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import '../../styles/project.css'

import { projectData } from '../../constants/project_info';
import ProjectCard from '../templates/ProjectCard';

const Portfolio = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	return (
		<div className='portfolio'>
			<h1 data-aos="fade-in" data-aos-delay="300">Projects</h1>
			<p data-aos="fade-in" data-aos-delay="300" className='intro'>A collection of my technical projects showcasing various skills and technologies</p>
			{projectData.map((project, index) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	)
}

export default Portfolio