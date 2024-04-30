import { React, useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CalendarCheck, TriangleFill } from 'react-bootstrap-icons'

import Uw from '../assets/uw.png'
import Mhs from '../assets/mhs.png'

import AOS from 'aos';
import 'aos/dist/aos'

const Education = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const educationTimelineRef = useRef(null);
	const dropdownContentRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	useEffect(() => {
		if (educationTimelineRef.current) {
			if (isDropdownVisible) {
				const dropdownHeight = dropdownContentRef.current.offsetHeight;
				educationTimelineRef.current.style.height = `${educationTimelineRef.current.offsetHeight + dropdownHeight}px`
			} else {
				educationTimelineRef.current.style.height = ``;
			}
		}
	}, [isDropdownVisible]);

  	return (
		<div className='education'>
			<Container>
				<h1>Education</h1>
				<Row className='education-timeline' ref={educationTimelineRef}>
					<Col xs={12} md={10} xl={2}><h3><CalendarCheck /> Sept 2023 - Present</h3></Col>
					<Col xs={12} md={10} xl={8} className='school-info'>
						<button className='h2' onClick={toggleDropdown}>University of Waterloo<TriangleFill  className='triangle-fill' style={{ transform: isDropdownVisible ? 'scale(-0.5)' : 'scale(-0.5) rotate(90deg)' }}/></button>
						{isDropdownVisible && (
							<div className='dropdown-content' ref={dropdownContentRef}>
								<h4 data-aos="fade-right" data-aos-delay="500">Bachelor of Computer Science</h4>
								<ul>
									<li data-aos="fade-right" data-aos-delay="700"><b>Relevant Courses:</b> Designing Functional Programs (Advanced), Algorithm Design and Data Abstraction</li>
									<li data-aos="fade-right" data-aos-delay="900"><b>Clubs:</b> Women in Computer Science, Tech+, Badminton Club</li>
								</ul>
							</div>
            			)}
					</Col>
				</Row>
				<Row className='education-timeline'>
					<Col xs={12} md={10} xl={2}><h3><CalendarCheck /> Sept 2019 - June 2023</h3></Col>
					<Col xs={12} md={10} xl={8}>
					<div className='image-container'>
							<img src={Mhs}/>
						</div>
						<h2>Merivale High School</h2>
						<h4>International Baccalaureate</h4>
						<p>Courses: AA Mathematics (HL), Chemistry (HL), English (HL), Physics (SL), Geography (SL), French (SL)</p>
						<p>Clubs: Math Club, Experimental Science Club, Vex Robotics, Senior Band, Music Council, Athletic Council, Senior Badminton Team</p>
					</Col>
				</Row>
			</Container>
		</div>
  	)
}

export default Education