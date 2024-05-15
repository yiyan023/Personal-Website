import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import YouWriter from './projects/YouWriter'
import DeafLink from './projects/DeafLink'
import TravelBuddy from './projects/TravelBuddy'
import ForgetMeNot from './projects/ForgetMeNot'
import IngredientSafe from './projects/IngredientSafe'

const Portfolio = () => {
	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<div className='projects'>
			<h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Projects</h1>
			<TravelBuddy />
			<YouWriter />
			<ForgetMeNot />
			<DeafLink />
			<IngredientSafe />
		</div>
	)
}

export default Portfolio