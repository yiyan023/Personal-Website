import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import YouWriterImg from '../../assets/projects/youwriter.png'
import JavaScript from '../../assets/javascript.png'
import Python from '../../assets/python.png'
import ReactJS from '../../assets/react.png'
import Flask from '../../assets/flask.png'
import MongoDB from '../../assets/mongodb.png'

const YouWriter = () => {
  return (
	<div className='project'>
		<Container className=''>
			<Row className='align-items-center justify-content-center'>
				<Col xs={12} md={10} xl={6} className='project-image'>
					<div className='image-container'>
						<img className="project-banner" src={YouWriterImg} />
					</div>
					<div className='summary'>
							<Container className='d-flex justify-content-center align-items-center'>
								<Row>
									<Col xs={5} md={4} xl={4} className='tech-summary'>
										<p>YouWriter is a full stack application that converts any YouTube video into a written summary.</p>
									</Col>
									<Col xs={3} md={5} xl={5} >
									</Col>
									<Col xs={1} md={1} xl={1} className='tech-stack'>
										<img className="tech" src={MongoDB} />
									</Col>
									<Col xs={1} md={1} xl={1} className='tech-stack'>
										<img className="tech" src={JavaScript} />
										<img className="tech" src={Python} />
										<img className="tech" src={ReactJS} />
										<img className="tech" src={Flask} />
									</Col>
								</Row>
							</Container>
						</div>
				</Col>
				<Col xs={12} md={10} xl={4} className='project-description'>
					<h2>YouWriter</h2>
					<h3>Full Stack Web Application</h3>
					<button>GitHub</button>
					<button>Demo</button>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default YouWriter