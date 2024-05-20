import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Linkedin } from "react-bootstrap-icons";
import { useEffect } from "react";
import '../../styling/homepage/about.css'

import Portrait from '../../assets/portrait.png';
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
				<Row className="align-items-center p-5 d-flex justify-content-center">
						<Col className="portrait d-flex justify-content-center align-items-center mb-5" xs={12} md={8} xl={6}>
							<img data-aos="fade-in" data-aos-delay="500" src={Portrait}/>
						</Col>
					<Col className="text-center text-xl-start d-flex flex-column justify-content-center align-items-center align-items-xl-start" xs={12} md={8} xl={6}>
						<h1 data-aos="fade-in" data-aos-delay="500">{`About Me`}</h1>
						<p className="introduction" data-aos="fade-in" data-aos-delay="1250">Hi, I'm Yiyan, an aspiring full-stack developer and a 2A Computer Science student at the University of Waterloo. As a keen learner who loves solving problems, I am always seeking opportunities to expand my technical skills and build something awesome!</p>
					</Col>
				</Row>
			</Container>
		</section>
	)
}