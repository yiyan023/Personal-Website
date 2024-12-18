import { useState, useEffect, React} from 'react'
import { Copyright } from '@mui/icons-material'
import { Spotify } from 'react-bootstrap-icons'
import '../styling/footer.css'

const Footer = () => {
	const [animate, setAnimate] = useState(false);
	
	useEffect(() => {
		let songName = document.getElementById('song-name');
		let differenceWidth = songName.clientWidth - songName.scrollWidth - 10;
		songName.style.setProperty('--end', `${differenceWidth}px`);
	
		window.addEventListener("resize", function() {
			differenceWidth = songName.clientWidth - songName.scrollWidth - 10;
			songName.style.setProperty('--end', `${differenceWidth}px`);
		});

	}, [])

	useEffect(() => {
		let songName = document.getElementById("song-name");

		function checkOverflow(element) {
			return element.clientWidth < element.scrollWidth;
		}
		
		window.addEventListener("scroll", function(event) {
			let footer = document.getElementById("footer");
			let footerRect = footer.getBoundingClientRect();
			let windowHeight = window.innerHeight || document.documentElement.clientHeight;
			let isVisible = footerRect.top < windowHeight && footerRect.bottom >= 0;

			if (isVisible && checkOverflow(songName)) {
				setAnimate(true);
			} else {
				setAnimate(false);
			}
		});
	}, [])

	return (
		<div className='footer' id='footer'>
			<div className='copyright'>
				<p><Copyright size={10}/> Yiyan Huang 2024</p>
			</div>
			<div className='fav-song'>
				<div className='spotify-logo'>
					<Spotify size={30}/>
				</div>
				<div className='song'>
					<p>Song on repeat:</p>
					<a href="https://open.spotify.com/track/7eGuPhpdS8sBjPJNuAShUX" target="blank"><strong><p className={`${animate ? 'animate-text' : ''}`} id="song-name">What is This Feeling? by Ariana Grande and Cynthia Erivo</p></strong></a>
					</div>
			</div>
		</div>
	)
}

export default Footer