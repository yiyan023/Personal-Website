import React from 'react'
import YouWriter from './projects/YouWriter'

const items = [
	{
		id: 2,
		name: "Forget Me Not",
		img: "", 
		description: "Forget Me Not is a mobile application that allows users to place handwritten notes on AR Objects and revisit these notes whenever they are in the area."
	},
	{
		id: 3,
		name: "Deaf Link",
		img: "",
		description: "Deaf Link is a machine learning model that aims to bridge global communication barriers in the deafmute community by converting ASL hand signs to English letters in real-time. This model was trained using a dataset of 2600+ images that were captured using OpenCV, where hand movement was tracked using 20+ landmarks from Mediapipe, and trained using Scikit-Learn."
	},
	{
		id: 4,
		name: "Travel Buddy",
		img: "",
		description: "Travel Buddy is a mobile application that allows users to access nearby restaurants in their area using the Yelp API and React Native Location Service."
	},
	{
		id: 5,
		name: "IngredientSafe",
		img: "", 
		description: "IngredientSafe is a full stack web application that aims to help the visually impaired by scanning food labels and returning potential allergens to the user."
	}
]

const Portfolio = () => {
  return (
	<div className='projects'>
		<h1>Projects</h1>
		<YouWriter />
	</div>
  )
}

export default Portfolio