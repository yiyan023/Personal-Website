import { React, useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import YouWriterImg from '../../assets/projects/youwriter.png'
import JavaScript from '../../assets/javascript.png'
import Python from '../../assets/python.png'
import ReactJS from '../../assets/react.png'
import Flask from '../../assets/flask.png'
import MongoDB from '../../assets/mongodb.png'

const YouWriter = () => {

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

	return (
		<div className='project'>
			<Container className=''>
				<Row className='align-items-center justify-content-center'>
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor-plaement="center-center">
						<div className='image-container'>
							<img className="project-banner" src={YouWriterImg} alt="YouWriter"/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>YouWriter is a full-stack web application that converts any YouTube video into a written summary.</p>
										</Col>
										<Col xs={5} md={6} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
										<img className="tech" src={JavaScript} alt="JavaScript"/>
											<img className="tech" src={Python} alt="Python"/>
											<img className="tech" src={ReactJS} alt="React" />
											<img className="tech" src={Flask} alt="Flask"/>
											<img className="tech" src={MongoDB} alt="MongoDB"/>
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">
						<h2>YouWriter</h2>
						<h3>Full Stack Web Application | Jan 2024</h3>
						<hr />
						<p>Aims to increase note-taking efficiency for students of all demographics</p>
						<button onClick={() => window.open("https://github.com/yiyan023/YouWriter")}>
							{text && "GitHub"} 
							<Github className="social-icons" size={18}/>
						</button>
						<button onClick={() => window.open("https://drive.google.com/file/d/19wz9ZFHrJbSOO6o8WEhHr_qE1zhK1pAO/view?usp=sharing")}>
							{text && "Demo"}
							<PlayBtnFill className="social-icons" size={18}/>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default YouWriter