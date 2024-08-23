import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { CodeSlash } from 'react-bootstrap-icons'
import RMTxtVideo from '../../../../assets/videos/rm-text.mp4'

import AOS from 'aos';
import 'aos/dist/aos'

const Personalize = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

  return (
	<Container className='work-project'>
			<Row className='work-row'>
				<Col xs={12} md={10} xl={7}>
					<video data-aos="fade-in" data-aos-delay="700" src={RMTxtVideo} controls={true}/>
				</Col>
				<Col xs={12} md={10} xl={5} className='text-center text-xl-start'>
					<h3 data-aos="fade-in" data-aos-delay="400">Canvas Frames Processor</h3>
					<hr data-aos="fade-in" data-aos-delay="400"></hr>
					<p data-aos="fade-in" data-aos-delay="500">Utilized Vite, JavaScript, WebCodecs API and MP4-Muxer to encode canvas frames onto a video element for improved playback. Implemented a simple animation to focus on frame processing.</p>
					<div className='button-div' data-aos="fade-in" data-aos-delay="600">
						<button onClick={() => window.open("https://github.com/yiyan023/Rich-Media-Work-Samples/blob/main/Dynamic%20Video%20Project/process.js")}>
							Code
							<CodeSlash className="social-icons" size={18}/>
						</button>
					</div>
				</Col>
			</Row>
		</Container>
  )
}

export default Personalize