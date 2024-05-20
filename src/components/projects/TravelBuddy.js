import { React, useEffect }from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import TravelBuddyImg from '../../assets/projects/travelbuddy.png'
import JavaScript from '../../assets/javascript.png'
import ReactJS from '../../assets/react.png'
import RestAPI from '../../assets/restapi.png'

const TravelBuddy = () => {
	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<div className='project'>
			<Container className=''>
				<Row className='align-items-center justify-content-center'>
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor-plaement="center-center">
						<div className='image-container'>
							<img className="project-banner" src={TravelBuddyImg} alt="Travel Buddy"/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>Travel Buddy is a mobile application that allows users to access nearby restaurants using the Yelp API and React Native Location Service.</p>
										</Col>
										<Col xs={5} md={5} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
											<img className="tech" src={JavaScript} alt="JavaScript"/>
											<img className="tech" src={ReactJS} alt="ReactJS" />
											<img className="tech" src={RestAPI} alt="RESTful API"/>
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-anchor-plaement="center-center">
						<h2>Travel Buddy</h2>
						<h3>Full Stack Mobile Application | Feb 2024</h3>
						<hr />
						<p>Aims to make travel more convenient for everyone</p>
						<button onClick={() => window.open("https://github.com/yiyan023/Travel-Buddy")}>
							GitHub 
							<Github className="social-icons" size={18}/>
						</button>
						<button onClick={() => window.open("https://drive.google.com/file/d/1gxdy7aW8iaw1YLzCLXtEkoi8r8feSEY0/view?usp=sharing")}>
							Demo
							<PlayBtnFill className="social-icons" size={18}/>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default TravelBuddy