import { useState, React }from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

function Carousel({images}) {
	const [current, setCurrent] = useState(0);
	return (
	
		<div className='carousel'>
			<div className='carousel-wrapper'>
				{images.map((image, index) => {
					return (
						<div key={index} 
							className={ index == current ? 'card card-active' : 'card'}>
						<img src={image.image} />
					</div>
					);
				})}
				<div className='arrow-left'>&lsaquo;</div>
				<div className='arrow-right'>&rsaquo;</div>
			</div>
		</div>
	)
}

export default Carousel