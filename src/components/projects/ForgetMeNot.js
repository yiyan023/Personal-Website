import { React , useEffect, useState }from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import FMNImg from '../../assets/projects/forgetmenot.png'
import Flutter from '../../assets/flutter.png'
import RestAPI from '../../assets/restapi.png'
import Flask from '../../assets/flask.png'
import MongoDB from '../../assets/mongodb.png'

const ForgetMeNot = () => {
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
			<Container >
				<Row className='align-items-center justify-content-center'>
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" >
						<div className='image-container'>
							<img className="project-banner" src={FMNImg}  alt='Forget Me Not'/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>Forget Me Not is a mobile application that enables users to place handwritten notes on AR objects and read them upon visits.</p>
										</Col>
										<Col xs={5} md={5} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
											<img className="tech" src={Flutter} alt="Flutter"/>
											<img className="tech" src={Flask} alt="Flask"/>
											<img className="tech" src={RestAPI} alt="RESTful API"/>
											<img className="tech" src={MongoDB} alt="MongoDB"/>
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-anchor-plaement="center-center">
						<h2>Forget Me Not</h2>
						<h3>Full Stack Mobile Application | Jan 2024</h3>
						<hr  />
						<p>Relive your favourite memories in augmented reality</p>
						<button onClick={() => window.open("https://github.com/yiyan023/Forget-Me-Not")}>
							{text && "GitHub "}
							<Github className="social-icons" size={18}/>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ForgetMeNot