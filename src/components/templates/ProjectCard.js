import { React, useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import { techIcons } from '../../constants/project_info';

const ProjectCard = ({ project }) => {
	const [text, setText] = useState(true)

	useEffect(() => {
		AOS.init();

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 325) {
				setText(false)
			} else {
				setText(true)
			}
		})
	}, [text])

	const projectImage = require(`../../assets/${project.image}`);

	const getTechIcons = () => {
		return project.technologies.map(tech => {
			const iconName = techIcons[tech];
			if (iconName) {
				return require(`../../assets/${iconName}`);
			}
			return null;
		}).filter(Boolean);
	};

	return (
		<div className='project'>
			<Container className=''>
				<Row className='align-items-center justify-content-center'>
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor-plaement="center-center">
						<div className='image-container'>
							<img className="project-banner" src={projectImage} alt={project.title}/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>{project.summary}</p>
										</Col>
										<Col xs={5} md={6} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
											{getTechIcons().map((icon, index) => (
												<img key={index} className="tech" src={icon} alt={project.technologies[index]} />
											))}
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">
						<h2>{project.title}</h2>
						<h3>{project.subtitle}</h3>
						<hr />
						<p>{project.description}</p>
						<button onClick={() => window.open(project.github)}>
							{text && "GitHub"} 
							<Github className="social-icons" size={18}/>
						</button>
						{project.hasDemo && (
							<button onClick={() => window.open(project.demo)}>
								{text && "Demo"}
								<PlayBtnFill className="social-icons" size={18}/>
							</button>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ProjectCard 