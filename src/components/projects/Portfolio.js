import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import '../../styling/project.css'

import YouWriter from './YouWriter'
import DeafLink from './DeafLink'
import TravelBuddy from './TravelBuddy'
import ForgetMeNot from './ForgetMeNot'
import IngredientSafe from './IngredientSafe'
import TuneScriber from './TuneScriber';
import BrailleEnglish from './BrailleEnglish';
import PizzaStudio from './PizzaStudio';
import Acceleratr from './Acceleratr';

const Portfolio = () => {
	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<div className='portfolio'>
			<h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Projects</h1>
      <div data-aos="fade-in" data-aos-delay="300" className='intro-paragraph'><p>9 projects and counting :).</p></div>
			<Acceleratr />
			<PizzaStudio />
      		<BrailleEnglish />
			<TuneScriber />
			<TravelBuddy />
			<YouWriter />
			<ForgetMeNot />
			<DeafLink />
			<IngredientSafe />
		</div>
	)
}

export default Portfolio