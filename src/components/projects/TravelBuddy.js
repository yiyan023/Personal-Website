import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'

import TravelBuddyImg from '../../assets/projects/travelbuddy.png'
import JavaScript from '../../assets/javascript.png'
import ReactJS from '../../assets/react.png'
import RestAPI from '../../assets/restapi.png'


const TravelBuddy = () => {
  return (
	<div className='project'>
		<Container className=''>
			<Row className='align-items-center justify-content-center'>
				<Col xs={12} md={10} xl={7} className='project-image'>
					<div className='image-container'>
						<img className="project-banner" src={TravelBuddyImg} />
					</div>
					<div className='summary'>
							<Container className='d-flex justify-content-center align-items-center'>
								<Row>
									<Col xs={5} md={4} xl={4} className='tech-summary'>
										<p>Travel Buddy is a mobile application that allows users to access nearby restaurants using the Yelp API and React Native Location Service.</p>
									</Col>
									<Col xs={5} md={6} xl={6} >
									</Col>
									<Col xs={1} md={1} xl={1} className='tech-stack'>
										<img className="tech" src={JavaScript} />
										<img className="tech" src={ReactJS} />
										<img className="tech" src={RestAPI} />
									</Col>
								</Row>
							</Container>
						</div>
				</Col>
				<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center'>
					<h2>Travel Buddy</h2>
					<h3>Full Stack Mobile Application</h3>
					<hr />
					<p>Aims to make travel more convenient for everyone</p>
					<button onClick={() => window.location.href = "https://github.com/yiyan023/YouWriter"}>
						GitHub 
						<Github className="social-icons" size={18}/>
					</button>
					<button onClick={() => window.location.href = "https://drive.google.com/file/d/1gxdy7aW8iaw1YLzCLXtEkoi8r8feSEY0/view?usp=sharing"}>
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