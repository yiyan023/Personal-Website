import { React, useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import TuneScriberIMG from '../../assets/projects/tunescriber.png'
import Python from '../../assets/python.png'
import JavaScript from '../../assets/javascript.png'
import Flask from '../../assets/flask.png'
import ReactIMG from '../../assets/react.png'
import RESTApi from '../../assets/restapi.png'

const TuneScriber = () => {
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
			<Container className='p-2'>
				<Row className='align-items-center justify-content-center'>
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" >
						<div className='image-container'>
							<img className="project-banner" src={TuneScriberIMG} alt="TuneScriber Banner"/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>TuneScriber is a full-stack web app that converts audio files into sheet music (one per instrument).</p>
										</Col>
										<Col xs={5} md={5} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
											<img className="tech" src={Python} alt="Python"/>
											<img className="tech" src={JavaScript} alt="JavaScript"/>
											<img className="tech" src={Flask} alt="Flask"/>
											<img className="tech" src={ReactIMG} alt="React"/>
											<img className="tech" src={RESTApi} alt="Rest API"/>
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-anchor-plaement="center-center">
						<h2>TuneScriber</h2>
						<h3>Full Stack Web App | Aug 2024</h3>
						<hr />
						<p>Aims to provide accessible music education.</p>
						<button onClick={() => window.open("https://github.com/yiyan023/TuneScriber")}>
							{text && "GitHub"}
							<Github className="social-icons" size={18}/>
						</button>
						<button onClick={() => window.open("https://drive.google.com/file/d/1oFRm2GzZL6RhDWPMNlYBwds8h-xtpKI5/view?usp=sharing")}>
							{text && "Demo"}
							<PlayBtnFill className="social-icons" size={18}/>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default TuneScriber