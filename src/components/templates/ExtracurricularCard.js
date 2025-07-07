import { React } from 'react'
import { Col, Row } from 'react-bootstrap'

const ExtracurricularCard = ({ extracurricular, isFullWidth = false }) => {
	const extracurricularImage = require(`../../assets/${extracurricular.image}`);

	if (isFullWidth) {
		return (
			<Col className="extracurricular-single" xs={10} md={8} xl={10}>
				<Row className="align-items-center justify-content-center">
					<Col xs={12} md={12} xl={6} className="image-section">
						<div className='image-container'>
							<img src={extracurricularImage} alt={extracurricular.title}/>
						</div>
					</Col>
					<Col xs={12} md={12} xl={6} className="description-section">
						<div className='description '>
							<h2>{extracurricular.title}</h2>
							<p>{extracurricular.date} - {extracurricular.organization}</p>
							<hr />
							<p className="explain">{extracurricular.description}</p>
						</div>
					</Col>
				</Row>
			</Col>
		);
	}

	return (
		<Col className="extracurricular-pair" xs={10} md={8} xl={5}>
			<div className='image-container'>
				<img src={extracurricularImage} alt={extracurricular.title}/>
			</div>
			<a href={extracurricular.link} target="blank">
				<div className='image-overlay'>
					<p className='explain'>{extracurricular.description}</p>
				</div>
			</a>
			<div className='description'>
				<h2>{extracurricular.title}</h2>
				<p className='describe'>{extracurricular.date} | {extracurricular.organization}</p>
			</div>
		</Col>
	);
}

export default ExtracurricularCard 