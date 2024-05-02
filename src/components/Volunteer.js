import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import Para from '../assets/para.png'
import Piano from '../assets/piano.png'
import Sba from '../assets/sba.png'
import Tournie from '../assets/tournie.png'

const Volunteer = () => {
  return (
	<div className='volunteer'>
		<h1>Other Experiences</h1>
		<p className='intro'>Non-technical experiences that showcase my passions and soft skills</p>
		<Container className='experiences'>
			<Row className='justify-content-center align-items-center'>
				<Col className='event' xs={12} md={10} xl={5}>
					<div className='image-container'>
						<img src={Sba} />
					</div>
					<div className='image-overlay'></div>
					<div className='description'>
						<h2>NCCP Level 1 Certified Badminton Coach</h2>
						<p className='describe'>Sept 2019 - Aug 2023 - Soong Badminton Academy</p>
					</div>
				</Col>
				<Col className='event' xs={12} md={10} xl={5}>
					<div className='image-container'>
						<img src={Piano} />
					</div>
					<div className='image-overlay'></div>
					<div className='description'>
						<h2>Piano Teacher</h2>
						<p className='describe'>Sept 2021 - Aug 2023 - Janet's Music School</p>
					</div>
				</Col>
			</Row>
			<Row className='justify-content-center align-items-center'>
				<Col className='event' xs={12} md={10} xl={5}>
				<div className='image-container'>
					<img src={Para} />
				</div>
					<div className='image-overlay'></div>
					<div className='description'>
						<h2>Line Judge</h2>
						<p className='describe'>Sept 2022 - Aug 2023 - BWF Para-badminton</p>
					</div>
				</Col>
				<Col className='event' xs={12} md={10} xl={5}>
					<div className='image-container'>
						<img src={Tournie} />
					</div>
					<div className='image-overlay'></div>
					<div className='description'>
						<h2>Tournament Coordinator</h2>
						<p className='describe'>Sept 2022 - Oct 2022 - Soong Badminton Academy</p>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Volunteer