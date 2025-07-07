import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import '../../styles/homepage/banner.css'

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [delta, setDelta] = useState(125 - Math.random() * 100);
	const [text, setText] = useState('');
	const period = 100;
	
	useEffect(() => {
		const toRotate = ["Software Engineer,", "Full Stack Developer,", "Web Developer,", "Backend Developer,", ]

		const tick = () => {
			let i = loopNum % toRotate.length;
			let fullText = toRotate[i];
			let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
			
			setText(updatedText);
			
			if (isDeleting) {
				setDelta(prevDelta => prevDelta /2)
			}
	
			if (!isDeleting && updatedText === fullText) {
				setIsDeleting(true);
				setDelta(period);
			} else if (isDeleting && updatedText === "") {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
				setDelta(period);
			}
		}

		let ticker = setInterval(() => {
			tick();
		}, delta)

		return () => { clearInterval(ticker)};
	}, [text, delta, isDeleting, loopNum ])

	return (
		<section className="banner" id="home">
			<Container>
				<div>
				<Row className="my-introduction align-items-center">
					<Col xs={12} md={10} xl={7}>
							<h1 className="name">{`Hi, I'm Yiyan Huang:`}</h1>
							<div className="fix-height"><h1 className="role">{text}</h1></div>
							<p className="normal-text">A second-year CS student at the University of Waterloo</p>
						<button className="resume-button" onClick={() => window.open('https://drive.google.com/file/d/1LQ4GOqGs5zc4rOyF82mo7NjyblZg265I/view?usp=sharing')}> View Resume <ArrowRightCircle className="resume" size={25} /> </button>
					</Col>
				</Row>
				</div>
			</Container>
		</section>
	)
}