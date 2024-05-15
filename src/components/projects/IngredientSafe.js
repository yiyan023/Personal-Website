import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'

import ISImg from '../../assets/projects/ingredientsafe.png'
import JavaScript from '../../assets/javascript.png'
import Python from '../../assets/python.png'
import OpenCV from '../../assets/opencv.png'
import Flask from '../../assets/flask.png'

const IngredientSafe = () => {
  return (
	<div className='project'>
		<Container >
			<Row className='align-items-center justify-content-center'>
				<Col xs={12} md={10} xl={7} className='project-image'>
					<div className='image-container'>
						<img className="project-banner" src={ISImg} />
					</div>
					<div className='summary'>
							<Container className='d-flex justify-content-center align-items-center'>
								<Row>
									<Col xs={5} md={4} xl={4} className='tech-summary'>
										<p>IngredientSafe is a full stack web application that scans food labels and returns potential allergens to the user.</p>
									</Col>
									<Col xs={5} md={6} xl={6} >
									</Col>
									<Col xs={1} md={1} xl={1} className='tech-stack'>
										<img className="tech" src={JavaScript} />
										<img className="tech" src={Python} />
										<img className="tech" src={Flask} />
										<img className="tech" src={OpenCV} />
									</Col>
								</Row>
							</Container>
						</div>
				</Col>
				<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center'>
					<h2>IngredientSafe</h2>
					<h3>Full Stack Web Application</h3>
					<hr />
					<p>Aims to help the visually impaired avoid allergic reactions</p>
					<button onClick={() => window.location.href = "https://github.com/yiyan023/YouWriter"}>
						GitHub 
						<Github className="social-icons" size={18}/>
					</button>
					<button onClick={() => window.location.href = "https://drive.google.com/file/d/19wz9ZFHrJbSOO6o8WEhHr_qE1zhK1pAO/view?usp=sharing"}>
						Demo
						<PlayBtnFill className="social-icons" size={18}/>
					</button>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default IngredientSafe