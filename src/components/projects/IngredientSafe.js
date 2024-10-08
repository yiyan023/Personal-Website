import { React, useEffect, useState }from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github  } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import ISImg from '../../assets/projects/ingredientsafe.png'
import JavaScript from '../../assets/javascript.png'
import Python from '../../assets/python.png'
import OpenCV from '../../assets/opencv.png'
import Flask from '../../assets/flask.png'

const IngredientSafe = () => {
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
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
						<div className='image-container'>
							<img className="project-banner" src={ISImg} alt="IngredientSafe"/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>IngredientSafe is a full-stack web application that scans food labels and returns potential allergens to the user.</p>
										</Col>
										<Col xs={5} md={5} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
											<img className="tech" src={JavaScript} alt="JavaScript"/>
											<img className="tech" src={Python} alt="Python"/>
											<img className="tech" src={Flask} alt="Flask"/>
											<img className="tech" src={OpenCV} alt="OpenCV"/>
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-anchor-plaement="center-center">
						<h2>IngredientSafe</h2>
						<h3>Full Stack Web Application | Dec 2022</h3>
						<hr />
						<p>Aims to help the visually impaired avoid allergic reactions</p>
						<button onClick={() => window.open("https://github.com/yiyan023/IngredientSafe")}>
							{text && "GitHub"}
							<Github className="social-icons" size={18}/>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default IngredientSafe