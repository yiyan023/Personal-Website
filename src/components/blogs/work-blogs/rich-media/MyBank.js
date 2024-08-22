import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { CodeSlash } from 'react-bootstrap-icons'
import MyBankVideo from '../../../../assets/videos/my-bank-video.webm'

import AOS from 'aos';
import 'aos/dist/aos'

const MyBank = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	return (
		<Container className='work-project'>
			<Row className='work-row'>
				<Col xs={12} md={10} xl={5} className='text-center text-xl-start'>
					<h3 data-aos="fade-in" data-aos-delay="400">MyBank Developer Lab</h3>
					<hr data-aos="fade-in" data-aos-delay="400"></hr>
					<p data-aos="fade-in" data-aos-delay="500">MyBank is a retirement savings calculator that collects user information and outputs results through customized graphical representations and PDFs. It was built using Vite, JavaScript and jQuery.</p>
					<div className='button-div' data-aos="fade-in" data-aos-delay="600">
						<button onClick={() => window.open("https://github.com/yiyan023/Rich-Media-Work-Samples/blob/main/My%20Bank/index.html")}>
							HTML
							<CodeSlash className="social-icons" size={18}/>
						</button>
						<button onClick={() => window.open("https://drive.google.com/file/d/19wz9ZFHrJbSOO6o8WEhHr_qE1zhK1pAO/view?usp=sharing")}>
							JS
							<CodeSlash className="social-icons" size={18}/>
						</button>
					</div>
				</Col>
				<Col xs={12} md={10} xl={7}>
					<video data-aos="fade-in" data-aos-delay="700" src={MyBankVideo} controls={true}/>
				</Col>
			</Row>
		</Container>
	)
}

export default MyBank