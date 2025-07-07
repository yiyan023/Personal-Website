import { React } from 'react'
import { Col, Row } from 'react-bootstrap'

const AwardCard = ({ award, isFullWidth = false }) => {
	const awardImage = require(`../../assets/${award.image}`);

	if (isFullWidth) {
		return (
			<Col className="award-single" xs={10} md={8} xl={10}>
				<Row className="align-items-center justify-content-center">
					<Col xs={12} md={12} xl={6} className="image-section">
						<div className='image-container'>
							<img src={awardImage} alt={award.title}/>
						</div>
					</Col>
					<Col xs={12} md={12} xl={6} className="description-section">
						<div className='description'>
							<h2>{award.title}</h2>
							<p>{award.date} - {award.organization}</p>
							<hr />
							<p className="explain">{award.explanation}</p>
						</div>
					</Col>
				</Row>
			</Col>
		);
	}

	return (
		<Col className="award-pair" xs={10} md={8} xl={5}>
			<div className='image-container'>
				<img src={awardImage} alt={award.title}/>
			</div>
			<div className='image-overlap'>
				<p className="explain">{award.explanation}</p>
			</div>
			<div className='description'>
				<h2>{award.title}</h2>
				<p>{award.date} - {award.organization}</p>
			</div>
		</Col>
	);
}

export default AwardCard 