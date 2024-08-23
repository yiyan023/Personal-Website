import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { CodeSlash, CameraVideo } from 'react-bootstrap-icons'
import RmNoTxtVideo from '../../../../assets/videos/rm-no-text.mp4'

import AOS from 'aos';
import 'aos/dist/aos'

const Compressor = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

  return (
	<Container className='work-project'>
			<Row className='work-row'>
				<Col xs={12} md={10} xl={5} className='text-center text-xl-end'>
					<h3 data-aos="fade-in" data-aos-delay="400">Multi-Video Merging Platform</h3>
					<hr data-aos="fade-in" data-aos-delay="400"></hr>
					<p data-aos="fade-in" data-aos-delay="500">Merges several video clips into a single cohesive video using Media Source API.</p>
					<div className='button-div' data-aos="fade-in" data-aos-delay="600">
						<button onClick={() => window.open("https://drive.google.com/drive/folders/1EmeIDzGT4QO3BmPu0FyQRjurK6x0AmbA?usp=drive_link")}>
							Videos
							<CameraVideo className="social-icons" size={18}/>
						</button>
						<button onClick={() => window.open("https://github.com/yiyan023/Rich-Media-Work-Samples/blob/main/Dynamic%20Video%20Project/combine.js")}>
							Code
							<CodeSlash className="social-icons" size={18}/>
						</button>
					</div>
				</Col>
				<Col xs={12} md={10} xl={7}>
					<video data-aos="fade-in" data-aos-delay="700" src={RmNoTxtVideo} controls={true}/>
				</Col>
			</Row>
		</Container>
  )
}

export default Compressor