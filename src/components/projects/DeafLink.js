import { React, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import DeafLinkImg from '../../assets/projects/deaflink.png'
import Python from '../../assets/python.png'
import OpenCV from '../../assets/opencv.png'
import ScikitLearn from '../../assets/scikit-learn.png'

const DeafLink = () => {
	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<div className='project'>
			<Container className=''>
				<Row className='align-items-center justify-content-center'>
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor-plaement="center-center">
						<div className='image-container'>
							<img className="project-banner" src={DeafLinkImg} alt="DeafLink"/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>Deaf Link is a machine learning model that was trained with 2600+ images to convert ASL hand signs to English letters in real-time.</p>
										</Col>
										<Col xs={5} md={5} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
											<img className="tech" src={Python} alt="Python"/>
											<img className="tech" src={OpenCV} alt="OpenCV"/>
											<img className="tech" src={ScikitLearn} alt="Scikit-Learn"/>
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-anchor-plaement="center-center">
						<h2>DeafLink</h2>
						<h3>Machine Learning Model | Nov 2023</h3>
						<hr />
						<p>Aims to bridge global communication barriers in the deafmute community</p>
						<button onClick={() => window.open("https://github.com/yiyan023/DeafLink")}>
							GitHub 
							<Github className="social-icons" size={18}/>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default DeafLink