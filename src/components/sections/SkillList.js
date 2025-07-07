import { React, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../../styles/skills/skill.css'

import Python from '../../assets/images/tech/python.png'
import JavaScript from '../../assets/images/tech/javascript.png'
import C from '../../assets/images/tech/c.png'
import ReactJS from '../../assets/images/tech/react.png'
import Flask from '../../assets/images/tech/flask.png'
import Tailwind from '../../assets/images/tech/tailwind.png'
import MongoDB from '../../assets/images/tech/mongodb.png'
import Git from '../../assets/images/tech/git.png'
import Bootstrap from '../../assets/images/tech/bootstrap.png'
import Flutter from '../../assets/images/tech/flutter.png'	

import AOS from 'aos';
import 'aos/dist/aos'

export const List = () => {	
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

  	return (
		<div className='list'>
			<h1 data-aos="fade-in" data-aos-delay="500" className="name"> Top Skills </h1>
			<Container>
				<Row className='align-items-center justify-content-center'>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="500"><img src={Python} alt="Python" / ><p>Python</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="500"><img src={JavaScript} alt="JavaScript"/><p>JavaScript</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="500"><img src={C} alt="C"/><p>C</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="500"><img src={ReactJS} alt="React"/><p>React</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="500"><img src={Flask} alt="Flask"/><p>Flask</p></div></Col>
				</Row>
				<Row className='align-items-center justify-content-center'>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="600"><img src={Tailwind} alt="TailwindCSS"/><p>Tailwind</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="600"><img src={MongoDB} alt="MongoDB"/><p>MongoDB</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="600"><img src={Git} alt="Git"/><p>Git</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="600"><img src={Bootstrap} alt="Bootstrap"/><p>Bootstrap</p></div></Col>
					<Col xl={2} xs={10} className='skill'><div className='col-space' data-aos="fade-in" data-aos-delay="600"><img src={Flutter} alt="Flutter"/><p>Flutter</p></div></Col>
				</Row>
			</Container>
		</div>
  	)
}