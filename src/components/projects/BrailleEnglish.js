import { React, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Github, PlayBtnFill } from 'react-bootstrap-icons'
import AOS from 'aos'
import 'aos/dist/aos.css';

import BrailleEnglishImg from '../../assets/projects/english-braille.png'
import Python from '../../assets/python.png'

const BrailleEnglish = () => {

	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<div className='project'>
			<Container className=''>
				<Row className='align-items-center justify-content-center'>
					<Col xs={12} md={10} xl={7} className='project-image' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor-plaement="center-center">
						<div className='image-container'>
							<img className="project-banner" src={BrailleEnglishImg} alt="YouWriter"/>
						</div>
						<div className='summary'>
								<Container className='d-flex justify-content-center align-items-center'>
									<Row>
										<Col xs={5} md={5} xl={5} className='tech-summary'>
											<p>Terminal/command-line project that converts English to Braille (and vice versa). Built for the Shopify Winter 2025 Engineering Challenge.</p>
										</Col>
										<Col xs={5} md={6} xl={5} >
										</Col>
										<Col xs={1} md={1} xl={1} className='tech-stack'>
											<img className="tech" src={Python} alt="Python"/>
										</Col>
									</Row>
								</Container>
							</div>
					</Col>
					<Col xs={12} md={10} xl={4} className='project-description text-center text-xl-start justify-content-center' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-anchor-plaement="center-center">
						<h2>English-Braille Translator</h2>
						<h3>Terminal Application | Aug 2024</h3>
						<hr />
						<p>Aims to make writing more accessible for the visually impaired.</p>
						<button onClick={() => window.open("https://github.com/yiyan023/yiyan-eng-intern-challenge/blob/python/python/translator.py")}>
							GitHub 
							<Github className="social-icons" size={18}/>
						</button>
						<button onClick={() => window.open("https://drive.google.com/file/d/1FjCIM7lAIfbrFXWjPs0j-75zUTHzlEWP/view?usp=sharing")}>
							Demo
							<PlayBtnFill className="social-icons" size={18}/>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default BrailleEnglish