import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import '../../styling/homepage/banner.css'

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

	/* function scrollDown() {

		const screenWidth = window.innerWidth;

    let scrollDistance;

    if (screenWidth <= 576) {
        scrollDistance = 850; 
    } else if (screenWidth > 576 && screenWidth < 992) {
        scrollDistance = 780;
    } else if (screenWidth >= 992) {
        scrollDistance = 745;
    }

		window.scrollBy({
			top: scrollDistance,
			behavior: 'smooth' 
		});
	} */

	return (
		<section className="banner" id="home">
			<Container>
				<div>
				<Row className="my-introduction align-items-center">
					<Col xs={12} md={10} xl={7}>
							<h1 className="name">{`Hi, I'm Yiyan Huang:`}</h1>
							<div className="fix-height"><h1 className="role">{text}</h1></div>
							<p className="normal-text">A second-year CS student at the University of Waterloo</p>
						<button className="resume-button" onClick={() => window.open('https://drive.google.com/file/d/1uLOGf1fEKcrAc62EP2Yu1BFLsFmXqnpt/view?usp=sharing')}> View Resume <ArrowRightCircle className="resume" size={25} /> </button>
						{/* <div className="next">
							<button className="next-button" onClick={scrollDown}><ArrowDownShort size={50} /> </button>
						</div> */}
					</Col>
				</Row>
				</div>
			</Container>
		</section>
	)
}