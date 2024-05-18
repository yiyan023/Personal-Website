import { React, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { CalendarCheck } from 'react-bootstrap-icons';
import 'react-vertical-timeline-component/style.min.css';
import '../../styling/experiences/work.css'

import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import School from '@mui/icons-material/School'

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
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#fff', color: '#1b0135' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
					date={<><CalendarCheck /> Sept 2024 - present</>}
					iconStyle={{ background: '#5339c4', color: '#fff' }}
					icon={<CodeIcon />}
				>
					<a href="https://www.neweicgroup.com/" target="blank"><h3 className="vertical-timeline-element-title">Full Stack Developer | NEW EIC</h3></a>
					<h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
					<p>
					Incoming part-time intern during Fall 2024
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#fff', color: '#1b0135' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
					date={<><CalendarCheck /> May 2024 - present</>}
					iconStyle={{ background: '#5339c4', color: '#fff' }}
					icon={<CodeIcon />}
				>
					<a href="https://www.richmedia.com/" target='blank'><h3 className="vertical-timeline-element-title">Software Developer | Rich Media</h3></a>
					<h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
					<p>
					Incoming full-time intern during Summer 2024.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#fff', color: '#1b0135' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
					date={<><CalendarCheck /> Sept 2019 - August 2023</>}
					iconStyle={{ background: '#5339c4', color: '#fff' }}
					icon={<PrecisionManufacturingIcon />}
				>
					<a href="https://www.team2706.ca/" target='blank'><h3 className="vertical-timeline-element-title">Software Developer | FIRST Robotics</h3></a>
					<h4 className="vertical-timeline-element-subtitle">Ottawa, ON</h4>
					<p>
					<ul>
						<li>Led the development of a robot vision system that can accurately identify <b>8 unique objects</b> and locate their XYZ coordinates using <b>Python</b> and <b>OpenCV</b></li>
						<li>Monitored real-time robot location by comparing its position to identified objects for accurate strategy implementation and precise execution during FRC matches</li>
						<li>Provided accessible coding workshops and hosted robotics demonstrations for <b>6000+ STEM students</b> in Ottawa</li>
					</ul>
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#fff', color: '#1b0135' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
					date={<><CalendarCheck />Jun 2021 - Aug 2021</>}
					iconStyle={{ background: '#5339c4', color: '#fff' }}
					icon={<School />}
				>
					<a href="https://codersports.com/" target='blank'><h3 className="vertical-timeline-element-title">Software Mentor | CoderSports</h3></a>
					<h4 className="vertical-timeline-element-subtitle">Ottawa, ON</h4>
					<p>
						<ul>
							<li>Mentored <b>20+ students</b> in programming by creating lesson plans, organizing hackathons, and offering hands-on guidance</li>
							<li>Documented <b>5+ processes</b> for solving data structure and algorithm problems by creating step-by-step coding tutorials for students to learn <b>Python</b></li>
							<li>Collaborated with <b>3+ mentors</b> to create an interactive project demonstration using <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b></li>
						</ul>
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
	</div>
  )
}

export default Work