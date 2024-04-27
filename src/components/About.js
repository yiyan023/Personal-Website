import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircleFill, ArrowDownLeft, ArrowDownShort, ArrowDownUp, ArrowRightCircle, ArrowRightShort, BoxArrowDown } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import Portrait from '../assets/portrait.png';

export const About = () => {
	return (
		<section className="about" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<h1 className="name">{`About Me:`}</h1>
						<p className="normal-text">A first-year CS student at the University of Waterloo</p>
					</Col>
					<Col xs={12} md={6} xl={5}>
					
					</Col>
				</Row>
			</Container>
		</section>
	)
}