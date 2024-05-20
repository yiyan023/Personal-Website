import { Container, Row, Col } from 'react-bootstrap'
import { React, useEffect } from 'react'
import '../../styling/skills/award.css'

import Waterloo from '../../assets/waterloo.png'
import MVP from '../../assets/mvp.png'
import IMPACT from '../../assets/impact.jpg'
import OWG from '../../assets/owg.png'
import LunarHacks from '../../assets/lunarhacks.png'
import ODBA from '../../assets/odba.png'

import AOS from 'aos';
import 'aos/dist/aos';

const Awards = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	return (
		<div className="awards">
			<h1 data-aos="fade-in" data-aos-delay="300">Awards</h1>
			<div data-aos="fade-in" data-aos-delay="300" className='intro-paragraph'><p>Here are some of the awards I have won (sorted by date) that show my accomplishments and interests.</p></div>
			<Container className='awards-grid'>
				<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='align-items-center justify-content-center'>
					<Col className="award" xs={10} md={8} xl={5} >
						<div className='image-container'><img src={Waterloo}/></div>
						<div className='image-overlap'>
							<p className="explain">A $2000 scholarship awarded by the University of Waterloo to recognize admitted students with a 95%+ admissions average.</p>
						</div>
						<div className='description'>
							<h2>President's Scholarship of Distinction</h2>
							<p>Sept 2023 - University of Waterloo</p>
						</div>
					</Col>
					<Col className="award" xs={10} md={8} xl={5} data-aos="fade-up">
						<div className='image-container'>
							<img src={MVP}/>
						</div>
						<div className='image-overlap'>
							<p className="explain">The Senior Badminton MVP Award is given to the recipient who performed at the highest level during the competitive season. I won the Mixed Doubles event in the 2021-2022 season and the Girls Doubles event in the 2022-2023, qualifying myself for OFSAA both years.</p>
						</div>
						<div className='description'>
							<h2>Senior Badminton MVP</h2>
							<p>June 2023 - Merivale High School</p>
						</div>
					</Col>
				</Row >
				<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='align-items-center justify-content-center'>
					<Col className="award" xs={10} md={8} xl={5}>
						<div className='image-container'>
							<img src={IMPACT}/>
						</div>
						<div className='image-overlap'>
							<p className="explain">The FIRST Impact Award is the most prestigious award at FIRST, it honors the team that best represents a model for other teams to emulate and best embodies the mission of FIRST. My team, 2706 Merge Robotics, received the IMPACT award at the Humber College event during the 2022-2023 season.</p>
						</div>
						<div className='description'>
							<h2>FIRST IMPACT Award</h2>
							<p>March 2023 - FIRST Robotics</p>
						</div>
					</Col>
					<Col className="award" xs={10} md={8} xl={5}>
						<div className='image-container'>
							<img src={OWG}/>
						</div>
						<div className='image-overlap'>
							<p className="explain">The Ontario Winter Games is the largest multi-sport event in the province and feature over 3,500 athletes, coaches, managers, and major officials. I competed as a badminton athlete representing Team Ottawa.</p>
						</div>
						<div className='description'>
							<h2>OWG 2nd Place</h2>
							<p>Feb 2023 - Badminton Ontario</p>
						</div>
					</Col>
				</Row>
				<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='align-items-center justify-content-center'>
					<Col className="award" xs={10} md={8} xl={5}>
						<div className='image-container'>
							<img src={LunarHacks}/>
						</div>
						<div className='image-overlap'>
							<p className="explain">A prestigious award given to the team who created the most innovative project that improves physical, mental and social well-being during LunarHacks II.</p>
						</div>
						<div className='description'>
							<h2>Best Health Hack</h2>
							<p>Dec 2022 - LunarHacks II</p>
						</div>
					</Col>
					<Col className="award" xs={10} md={8} xl={5}>
						<div className='image-container'>
							<img src={ODBA}/>
						</div>
						<div className='image-overlap'>
							<p className="explain">Athlete of the Year recognizes the player who has accumulated the most ranking points throughout the competitive season in the singles, doubles, and mixed doubles events combined.</p>
						</div>
						<div className='description'>
							<h2>U19 Athlete of the Year </h2>
							<p>June 2020 - ODBA</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Awards