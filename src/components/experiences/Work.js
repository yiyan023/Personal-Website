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
					date={<><CalendarCheck /> Jan 2025 - present</>}
					iconStyle={{ background: '#5339c4', color: '#fff' }}
					icon={<CodeIcon />}
				>
					<a href="https://pointclickcare.com/" target="blank"><h3 className="vertical-timeline-element-title">Software Engineering Intern | PointClickCare </h3></a>
					<h4 className="vertical-timeline-element-subtitle">Kitchener, ON</h4>
					<p>
						Provided care management services for <b>2.7M+ users</b> by implementing new features based on user feedback, optimizing database querying performance, and writing automated E2E/unit tests using <b>React</b>, <b>Cypress</b>, and <b>SQL</b>
					</p>
					<p>
						Led the development of a care plan mapping service that adds goals/tasks to patient profiles by handling <b>3000+ PostgreSQL entries</b>, relaxing user permissions, and improving response time by <b>700ms</b> using <b>JavaScript</b> and <b>Java</b>
					</p>
					<p>
						Increased <b>code coverage to 83%</b> by writing <b>10+ TestNG unit tests</b> to validate JavaScript logic and data retrieval
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#fff', color: '#1b0135' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
					date={<><CalendarCheck /> May 2024 - Aug 2024</>}
					iconStyle={{ background: '#5339c4', color: '#fff' }}
					icon={<CodeIcon />}
				>
					<a href="https://www.richmedia.com/" target='blank'><h3 className="vertical-timeline-element-title">Software Developer | Rich Media</h3></a>
					<h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
					<p>
						<ul>
							<li>Developed responsive financial literacy web apps for <b>10+ million users</b> that collect user information, perform mathematical computation, and generate PDF documents with customized graphical representations</li>
							<li>Increased <b>code coverage to 80%+</b> for a property/mortgage protection web app by writing and integrating <b>10+ Cypress E2E tests</b> into a <b>Jenkins server framework</b> for automated regression testing and continuous integration</li>
							<li>Enhanced accessibility compliance for <b>150+ digital literacy articles</b> by implementing <b>ARIA features</b> and conducting auditing to ensure compatibility with keyboard navigation and <b>non-visual desktop access (NVDA)</b> standards </li>
							<li>Achieved data quality for <b>5+ mortgage protection platforms</b> by generating mathematical formulas, computing affordability based on user input, and cross-referencing data outputs with <b>30+ verified test cases</b> using <b>TypeScript</b></li>
							<li>Decreased <b>playback latency by 30%</b> for <b>5 dynamic videos</b> by decoding video frames onto a canvas for user customization, then encoding frames for rendering using <b>MP4Box</b>, <b>MP4-Muxer</b>, and <b>WebCodecs API</b></li>
						</ul>
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
							<li>Led the development of a robot vision system that recognizes <b>8 unique objects</b> and tracks their <b>XYZ coordinates</b></li>
							<li>Increased <b>execution accuracy by 60%</b> during provincial robotics competitions by calculating the surface area of identified objects to derive the robot’s relative distance using <b>Python</b>, <b>OpenCV libraries</b>, and <b>pose estimation</b></li>
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