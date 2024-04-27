import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircleFill, ArrowDownLeft, ArrowDownShort, ArrowDownUp, ArrowRightCircle, ArrowRightShort, BoxArrowDown } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import Portrait from '../assets/portrait.png';

export const About = () => {
	return (
		<section className="about" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={5}>
						<img src={Portrait}/>
					</Col>
					<Col xs={12} md={6} xl={7}>
						<h1>{`About Me`}</h1>
						<p className="normal-text">Hi, I'm Yiyan, an aspiring full-stack developer and incoming sophmore at the University of Waterloo. As a keen learner who loves solving problems, I am always seeking opportunities to expand my technical skills and build something awesome! Feel free to check out any of my projects and experiences.</p>
					</Col>
				</Row>
			</Container>
		</section>
	)
}