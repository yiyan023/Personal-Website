import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircleFill, ArrowDownLeft, ArrowDownShort, ArrowDownUp, ArrowRightCircle, ArrowRightShort, BoxArrowDown, Envelope, Linkedin } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

import Portrait from '../assets/portrait.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
	useEffect(() => {
        AOS.init({
			duration: 1000
		});
    }, []);

	return (
		<section className="about" id="home">
			<Container>
				<Row className="align-items-center p-5">
						<Col className="portrait d-flex justify-content-center align-items-center mb-5" xs={12} md={6} xl={6}>
							<img data-aos="fade-in" data-aos-delay="500" src={Portrait}/>
						</Col>
					<Col className="text-center text-md-start justify-content-center" xs={12} md={6} xl={6}>
						<h1 data-aos="fade-in" data-aos-delay="500">{`About Me`}</h1>
						<p className="introduction" data-aos="fade-in" data-aos-delay="1250">Hi, I'm Yiyan, an aspiring full-stack developer and incoming sophomore at the University of Waterloo. As a keen learner who loves solving problems, I am always seeking opportunities to expand my technical skills and build something awesome!</p>
						<a data-aos="fade-in" data-aos-delay="2000" href="mailto:y84huang@uwaterloo.ca" target="blank">   <Envelope />: y84huang@uwaterloo.ca</a>
						<a data-aos="fade-in" data-aos-delay="2000" href="https://www.linkedin.com/in/yiyanhh23/" target="blank">   <Linkedin />: yiyanhh23</a>
					</Col>
				</Row>
			</Container>
		</section>
	)
}