import { React, useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CalendarCheck, TriangleFill } from 'react-bootstrap-icons'
import '../../styling/experiences/education.css'

import AOS from 'aos';
import 'aos/dist/aos'

const Education = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const [isDropdownVisible2, setDropdownVisible2] = useState(false);
	const educationOneRef = useRef(null);
	const educationTwoRef = useRef(null);
	const uwDropdownContentRef = useRef(null);
	const mhsDropdownContentRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

	const toggleDropdown2 = () => {
        setDropdownVisible2(!isDropdownVisible2);
    };

	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	useEffect(() => {
		if (educationOneRef.current) {
			if (isDropdownVisible) {
				const dropdownHeight = uwDropdownContentRef.current.offsetHeight;
				educationOneRef.current.style.height = `${educationOneRef.current.offsetHeight + dropdownHeight}px`
			} else {
				educationOneRef.current.style.height = ``;
			}
		}
	}, [isDropdownVisible]);

	useEffect(() => {
		if (educationTwoRef.current) {
			if (isDropdownVisible2) {
				const dropdownHeight2 = mhsDropdownContentRef.current.offsetHeight;
				educationTwoRef.current.style.height = `${educationTwoRef.current.offsetHeight + dropdownHeight2}px`
			} else {
				educationTwoRef.current.style.height = ``;
			}
		}
	}, [isDropdownVisible2]);

  	return (
		<div className='education'>
			<Container>
				<h1 data-aos="fade-in" data-aos-delay="400">Education</h1>
				<Row className='education-one' ref={educationOneRef}>
					<Col xs={12} md={10} xl={3} data-aos="fade-in" data-aos-delay="500"><h3><CalendarCheck /> Sept 2023 - Present</h3></Col>
					<Col xs={12} md={10} xl={4} className='school-info'>
						<button className='h2' data-aos="fade-in" data-aos-delay="500" onClick={toggleDropdown}>University of Waterloo<TriangleFill  className='triangle-fill' style={{ transform: isDropdownVisible ? 'scale(-0.5)' : 'scale(-0.5) rotate(90deg)' }}/></button>
						{isDropdownVisible && (
							<div className='uw-dropdown-content' ref={uwDropdownContentRef}>
								<h4 data-aos="fade-right" data-aos-delay="500">Bachelor of Computer Science | 85.8% average</h4>
								<ul>
									<li data-aos="fade-right" data-aos-delay="700"><b>Relevant Courses:</b> Designing Functional Programs (Advanced), Algorithm Design and Data Abstraction</li>
									<li data-aos="fade-right" data-aos-delay="900"><b>Clubs:</b> Women in Computer Science, Tech+, Badminton Club</li>
								</ul>
							</div>
            			)}
					</Col>
				</Row>

				<Row className='education-two' ref={educationTwoRef}>
					<Col xs={12} md={10} xl={3} data-aos="fade-in" data-aos-delay="700"><h3><CalendarCheck /> Sept 2019 - June 2023</h3></Col>
					<Col xs={12} md={10} xl={4} className='school-info'>
						<button className='h2' data-aos="fade-in" data-aos-delay="700" onClick={toggleDropdown2}>Merivale High School<TriangleFill  className='triangle-fill' style={{ transform: isDropdownVisible2 ? 'scale(-0.5)' : 'scale(-0.5) rotate(90deg)' }}/></button>
						{isDropdownVisible2 && (
							<div className='mhs-dropdown-content' ref={mhsDropdownContentRef}>
								<h4 data-aos="fade-right" data-aos-delay="500">International Baccalaureate | 98.3% average</h4>
								<ul>
									<li data-aos="fade-right" data-aos-delay="700"><b>Courses: </b>AA Mathematics (HL), Chemistry (HL), English (HL), Physics (SL), Geography (SL), French (SL)</li>
									<li data-aos="fade-right" data-aos-delay="900"><b>Clubs: </b> Math Club, Experimental Science Club, Vex Robotics, Senior Band, Music Council, Athletic Council, Senior Badminton Team</li>
								</ul>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</div>
  	)
}

export default Education