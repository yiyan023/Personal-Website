import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

export const Banner = () => {
	const toRotate = ["Software Engineer,", "Full Stack Developer,", "Web Developer,", "Backend Developer,", ]
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [delta, setDelta] = useState(125 - Math.random() * 100);
	const [text, setText] = useState('');
	const period = 100;

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
	
	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta)

		return () => { clearInterval(ticker)};
	}, [text])

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<h1 className="name">{`Hi, I'm Yiyan Huang:`}</h1>
						<h1 className="role">{text}</h1>
						<p className="normal-text">A first-year CS student at the University of Waterloo</p>
						<button onClick={() => console.log('connect')}>View Resume <ArrowRightCircle size={25} /> </button>
					</Col>
					<Col xs={12} md={6} xl={5}>
					</Col>
				</Row>
			</Container>
		</section>
	)
}