import { React, useEffect }from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../../styling/experiences/volunteer.css'

import Para from '../../assets/para.png'
import Piano from '../../assets/piano.png'
import Sba from '../../assets/sba.png'
import Tournie from '../../assets/tournie.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Volunteer = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

  return (
	<div className='volunteer'>
		<h1 data-aos="fade-in" data-aos-delay="300">Other Experiences</h1>
		<p data-aos="fade-in" data-aos-delay="300" className='intro'>Non-technical experiences that showcase my passions and soft skills</p>
		<Container className='experiences'>
			<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='justify-content-center align-items-center'>
				<Col className='event' xs={10} md={8} xl={5}>
					<div className='image-container'>
						<img src={Sba} />
					</div>
					<a href="https://www.soong.ca/" target="blank">
						<div className='image-overlay'>
							<p className='explain'>Mentored 600+ athletes of all ages and playing levels through error detection and on-court demonstrations during seasonal training sessions and local tournaments.</p>
						</div>
					</a>
					<div className='description'>
						<h2>NCCP Certified Badminton Coach</h2>
						<p className='describe'>Sept 2019 - Aug 2023 | Soong Badminton Academy</p>
					</div>
				</Col>
				<Col className='event' xs={10} md={8} xl={5}>
					<div className='image-container'>
						<img src={Piano} />
					</div>
					<a href="https://janetsmusic.com/" target='blank'>
						<div className='image-overlay'>
							<p className='explain'>Taught 10+ students of all ages and experience levels by introducing theoretical and practical concepts to develop effective hand positioning, pedal use, and sight reading.</p>
						</div>
					</a>
					<div className='description'>
						<h2>Piano Teacher</h2>
						<p className='describe'>Sept 2021 - Aug 2023 | Janet's Music School</p>
					</div>
				</Col>
			</Row>
			<Row data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='justify-content-center align-items-center'>
				<Col className='event' xs={10} md={8} xl={5}>
				<div className='image-container'>
					<img src={Para} />
				</div>
					<a href="https://sirc.ca/events/events-conferences/2023-yonex-canada-para-badminton-intnernational/" target="blank">
						<div className='image-overlay'>
							<p className='explain'>Line judged for 100+ para-badminton international athletes by following official BWF ediquette and practicing fair play. </p>
						</div>
					</a>
					<div className='description'>
						<h2>Line Judge</h2>
						<p className='describe'>Sept 2022 - Aug 2023 | BWF Para-badminton</p>
					</div>
				</Col>
				<Col className='event' xs={10} md={8} xl={5}>
					<div className='image-container'>
						<img src={Tournie} />
					</div>
					<a href="https://photos.app.goo.gl/vkzpzvs3k5aZfCfC8" target="blank">
						<div className='image-overlay'>
							<p className='explain'>Coordinated a regional Ottawa tournament hosting 200+ athletes from ages 4-19 under the mentorship of Dominic Soong and Janet Hugli.</p>
						</div>
					</a>
					<div className='description'>
						<h2>Tournament Coordinator</h2>
						<p className='describe'>Sept 2022 - Oct 2022 | Soong Badminton Academy</p>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Volunteer