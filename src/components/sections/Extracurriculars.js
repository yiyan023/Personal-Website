import { React, useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'
import '../../styles/experiences/extracurriculars.css'

import { extracurricularData } from '../../constants/extracurricular_info';
import ExtracurricularCard from '../templates/ExtracurricularCard';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Extracurriculars = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	const extracurricularPairs = [];
	const isOdd = extracurricularData.length % 2 === 1;
	
	if (isOdd) {
		extracurricularPairs.push([extracurricularData[0]]);
		for (let i = 1; i < extracurricularData.length; i += 2) {
			extracurricularPairs.push(extracurricularData.slice(i, i + 2));
		}
	} else {
		for (let i = 0; i < extracurricularData.length; i += 2) {
			extracurricularPairs.push(extracurricularData.slice(i, i + 2));
		}
	}

	return (
		<div className='volunteer'>
			<h1 data-aos="fade-in" data-aos-delay="300">Extracurriculars</h1>
			<p data-aos="fade-in" data-aos-delay="300" className='intro'>Non-technical experiences that showcase my passions and soft skills</p>
			<Container className='experiences'>
				{extracurricularPairs.map((pair, rowIndex) => (
					<Row 
						key={rowIndex}
						data-aos="fade-up" 
						data-aos-anchor-placement="top-bottom" 
						data-aos-delay="700" 
						className='justify-content-center align-items-center'
					>
						{pair.map((extracurricular) => (
							<ExtracurricularCard 
								key={extracurricular.id} 
								extracurricular={extracurricular} 
								isFullWidth={isOdd && rowIndex === 0}
							/>
						))}
					</Row>
				))}
			</Container>
		</div>
	)
}

export default Extracurriculars