import { Container, Row, Col } from 'react-bootstrap'
import { React, useEffect } from 'react'

import Waterloo from '../assets/waterloo.png'
import MVP from '../assets/mvp.png'
import IMPACT from '../assets/impact.jpg'
import OWG from '../assets/owg.jpg'
import LunarHacks from '../assets/lunarhacks.png'
import ODBA from '../assets/odba.png'

import AOS from 'aos';
import 'aos/dist/aos';

const Awards = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	return (
		<div class="awards">
			<h1 data-aos="fade-in" data-aos-delay="300">Awards</h1>
			<div data-aos="fade-in" data-aos-delay="300" className='intro-paragraph'><p>Here are some of the awards I have won that show my accomplishments and interests inside & outside of tech!</p></div>
			<Container className='awards-grid'>
				<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='align-items-center justify-content-center'>
					<Col className="award" xs={12} md={10} xl={5} ><img src={Waterloo}/><div className='description'><h2>President's Scholarship of Distinction</h2><p>Sept 2023 - University of Waterloo</p></div></Col>
					<Col className="award" xs={12} md={10} xl={5} data-aos="fade-up"><img src={MVP}/><div className='description'><h2>Senior Badminton MVP</h2><p>June 2022, June 2023 - Merivale High School</p></div></Col>
				</Row >
				<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='align-items-center justify-content-center'>
					<Col className="award" xs={12} md={10} xl={5}><img src={IMPACT}/><div className='description'><h2>FIRST IMPACT Award</h2><p>March 2023 - FIRST Robotics</p></div></Col>
					<Col className="award" xs={12} md={10} xl={5}><img src={OWG}/><div className='description'><h2>OWG 2nd Place</h2><p>Feb 2023 - Badminton Ontario</p></div></Col>
				</Row>
				<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='align-items-center justify-content-center'>
					<Col className="award" xs={12} md={10} xl={5}><img src={LunarHacks}/><div className='description'><h2>Best Health Hack</h2><p>Dec 2022 - LunarHacks II</p></div></Col>
					<Col className="award" xs={12} md={10} xl={5}><img src={ODBA}/><div className='description'><h2>U19 Athlete of the Year </h2><p>June 2020 - ODBA</p></div></Col>
				</Row>
			</Container>
		</div>
	)
}

export default Awards