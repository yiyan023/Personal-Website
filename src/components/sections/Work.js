import { React, useEffect } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../../styles/experiences/work.css'
import WorkCard from '../templates/WorkCard'
import { workInfo } from '../../constants/work_info'

import AOS from 'aos'
import 'aos/dist/aos'

const Work = () => {

	useEffect(() => {
		AOS.init({
			duration: 1000
		})
	}, [])

	return (
		<div className='work'>
			<h1 data-aos="fade-in" data-aos-delay="100">Relevant Experience</h1>
			<VerticalTimeline>
				{workInfo.map((work, index) => (
					<WorkCard key={index} work={work} />
				))}
			</VerticalTimeline>
		</div>
  )
}

export default Work