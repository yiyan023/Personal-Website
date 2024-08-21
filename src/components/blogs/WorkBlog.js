import React, { useState } from 'react'
import RichMedia from './work-blogs/RichMedia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const WorkBlog = () => {
	const [toggleRichMedia, setToggleRichMedia] = useState(false);

	const toggleRM = () => {
		setToggleRichMedia(!toggleRichMedia)
	}

	return (
		<div className='work-blog'>
			<h1 className='work-title'>Work Reflections</h1>
			<p className='work-summary'>Hey there, here is a portfolio of everything I accomplished during my work terms! Please note that for the privacy of company clients, I will only be sharing internal projects.</p>
			<div className='rich-media-div'>
				<h2 onClick={toggleRM} className='rich-media-title'><FontAwesomeIcon icon={faAnglesRight} className={`right-arrow ${toggleRichMedia ? 'active' : ''}`}/> Rich Media</h2>
				{toggleRichMedia && (
					<RichMedia />
				)}
			</div>
		</div>
	)
}

export default WorkBlog