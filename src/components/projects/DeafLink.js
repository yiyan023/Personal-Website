import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'

import DeafLinkImg from '../../assets/projects/deaflink.png'
import Python from '../../assets/python.png'
import OpenCV from '../../assets/opencv.png'
import ScikitLearn from '../../assets/scikit-learn.png'

const DeafLink = () => {
  return (
	<div className='project'>
		<Container className=''>
			<Row className='align-items-center justify-content-center'>
				<Col xs={12} md={10} xl={7} className='project-image'>
					<div className='image-container'>
						<img className="project-banner" src={DeafLinkImg} />
					</div>
					<div className='summary'>
							<Container className='d-flex justify-content-center align-items-center'>
								<Row>
									<Col xs={5} md={4} xl={4} className='tech-summary'>
										<p>Deaf Link is a machine learning model that has been trained with 2600+ images to convert ASL hand signs to English letters in real-time.</p>
									</Col>
									<Col xs={5} md={6} xl={6} >
									</Col>
									<Col xs={1} md={1} xl={1} className='tech-stack'>
										<img className="tech" src={Python} />
										<img className="tech" src={OpenCV} />
										<img className="tech" src={ScikitLearn} />
									</Col>
								</Row>
							</Container>
						</div>
				</Col>
				<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center'>
					<h2>DeafLink</h2>
					<h3>Machine Learning Model</h3>
					<hr />
					<p>Aims to bridge global communication barriers in the deafmute community</p>
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

export default DeafLink