import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import '../../styles/homepage/about.css'

import Portrait from '../../assets/images/home/portrait.png';
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
							<img data-aos="fade-in" data-aos-delay="500" src={Portrait} alt="Yiyan Huang"/>
						</Col>
					<Col className="text-center text-xl-start d-flex flex-column justify-content-center align-items-center align-items-xl-start" xs={12} md={8} xl={6}>
						<h1 data-aos="fade-in" data-aos-delay="500">{`About Me`}</h1>
						<p className="introduction" data-aos="fade-in" data-aos-delay="1250">
							Hi! 👋 I'm Yiyan. Currently, I'm:
							<br />
							• studying CS at the University of Waterloo
							<br />
							• building @ Harvey AI
							<br />
							• listening to music & playing lots of badminton
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	)
}