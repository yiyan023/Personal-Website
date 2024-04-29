import { React, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";

import Python from '../assets/python.png'
import JavaScript from '../assets/javascript.png'
import C from '../assets/c.png'
import ReactJS from '../assets/react.png'
import Flask from '../assets/flask.png'
import Tailwind from '../assets/tailwind.png'
import MongoDB from '../assets/mongodb.png'
import Git from '../assets/git.png'
import Bootstrap from '../assets/bootstrap.png'
import Flutter from '../assets/flutter.png'

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
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1000" className='skill'><img src={Python}/><p>Python</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1000" className='skill'><img src={JavaScript}/><p>JavaScript</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1000" className='skill'><img src={C}/><p>C</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1000" className='skill'><img src={ReactJS}/><p>React</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1000" className='skill'><img src={Flask}/><p>Flask</p></Col>
				</Row>
				<Row className='align-items-center justify-content-center'>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1250" className='skill'><img src={Tailwind}/><p>Tailwind</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1250" className='skill'><img src={MongoDB}/><p>MongoDB</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1250" className='skill'><img src={Git}/><p>Git</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1250" className='skill'><img src={Bootstrap}/><p>Bootstrap</p></Col>
					<Col xl={2} xs={10} data-aos="fade-in" data-aos-delay="1250" className='skill'><img src={Flutter}/><p>Flutter</p></Col>
				</Row>
			</Container>
		</div>
  	)
}