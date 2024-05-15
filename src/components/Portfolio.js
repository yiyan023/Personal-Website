import React from 'react'
import YouWriter from './projects/YouWriter'
import DeafLink from './projects/DeafLink'
import TravelBuddy from './projects/TravelBuddy'
import ForgetMeNot from './projects/ForgetMeNot'
import IngredientSafe from './projects/IngredientSafe'

const Portfolio = () => {
  return (
	<div className='projects'>
		<h1>Projects</h1>
		<YouWriter />
		<DeafLink />
		<TravelBuddy />
		<ForgetMeNot />
		<IngredientSafe />
	</div>
  )
}

export default Portfolio