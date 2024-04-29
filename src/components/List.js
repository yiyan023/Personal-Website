import React from 'react'
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

export const List = () => {
  return (
	<div className='list'>
		<h1 className="name"> Top Skills: </h1>
		<Container>
			<Row className='align-items-center'>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={Python}/><p>Python</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={JavaScript}/><p>JavaScript</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={C}/><p>C</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={ReactJS}/><p>React</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={Flask}/><p>Flask</p></Col>
			</Row>
			<Row className='align-items-center'>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={Tailwind}/><p>Tailwind</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={MongoDB}/><p>MongoDB</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={Git}/><p>Git</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={Bootstrap}/><p>Bootstrap</p></Col>
				<Col className='align-items-center justify-content-center d-flex portrait border border-2 border-white flex-column pt-5 pb-5 m-2'><img src={Flutter}/><p>Flutter</p></Col>
			</Row>
		</Container>
	</div>
  )
}