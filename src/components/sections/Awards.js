import { Container, Row } from 'react-bootstrap'
import { React, useEffect } from 'react'
import '../../styles/skills/award.css'

import { awardData } from '../../constants/award_info';
import AwardCard from '../templates/AwardCard';

import AOS from 'aos';
import 'aos/dist/aos';

const Awards = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	const awardPairs = [];
	const isOdd = awardData.length % 2 === 1;
	
	if (isOdd) {
		awardPairs.push([awardData[0]]);
		for (let i = 1; i < awardData.length; i += 2) {
			awardPairs.push(awardData.slice(i, i + 2));
		}
	} else {
		for (let i = 0; i < awardData.length; i += 2) {
			awardPairs.push(awardData.slice(i, i + 2));
		}
	}

	return (
		<div className="awards">
			<h1 data-aos="fade-in" data-aos-delay="300">Awards</h1>
			<div data-aos="fade-in" data-aos-delay="300" className='intro-paragraph'>
				<p>Here are some of the awards I have won (sorted by date) that show my accomplishments and interests.</p>
			</div>
			<Container className='awards-grid'>
				{awardPairs.map((pair, rowIndex) => (
					<Row 
						key={rowIndex}
						data-aos="fade-up" 
						data-aos-anchor-placement="top-bottom" 
						data-aos-delay="700" 
						className='align-items-center justify-content-center'
					>
						{pair.map((award) => (
							<AwardCard 
								key={award.id} 
								award={award} 
								isFullWidth={isOdd && rowIndex === 0}
							/>
						))}
					</Row>
				))}
			</Container>
		</div>
	)
}

export default Awards