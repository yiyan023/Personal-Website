import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import $ from 'jquery'
import '../../styles/nav.css'

import logo from '../../assets/images/home/yh.png';
import Insta from '../../assets/images/social-icons/instagram.png';
import GitHub from '../../assets/images/social-icons/github.png';
import LinkedIn from '../../assets/images/social-icons/linkedin.png'
import Gmail from '../../assets/images/social-icons/email.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState("false"); 
	const [dropdown, setDropdown] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let $dropdown = $(".navbar-collapse");
		let dropdownButton = document.getElementById("dropdown-icon")

		dropdownButton.addEventListener("click", function(event) {
			if (!$dropdown.is(":visible")) {
				setDropdown(true);
				console.log("visible");
			} else {
				setDropdown(false);
			}

		})
	}, [])

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

	useEffect(() => {
		window.scrollTo(0, 0);
	  }, [location]);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "notScrolled"}>
                <Navbar.Brand href="/"><img src={logo} height="130" width="130" href="#home" alt="logo"/>
                </Navbar.Brand>
                <div className="toggle">
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className={`navbar-toggler-icon ${dropdown ? 'toggled' : ''}`} id="dropdown-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link to="/skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLink('skills'); navigate('/skills')}}>Skills</Nav.Link>
							<Nav.Link to="/experiences" className={activeLink === 'experience' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLink('experience'); navigate('/experiences')}}>Experience</Nav.Link>
							<Nav.Link to="/projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLink('projects'); navigate('/projects')}}>Projects</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a href="https://www.instagram.com/yiyanhh" className="social-buttons" target="blank"><img src={Insta} alt="Instagram"/></a>
								<a href="https://github.com/yiyan023" className="social-buttons" target="blank"><img src={GitHub} alt="GitHub"/></a>
								<a href="https://www.linkedin.com/in/yiyanhh/" className="social-buttons" target="blank"><img src={LinkedIn} alt="LinkedIn"/></a>
								<a href="mailto:y84huang@uwaterloo.ca" className="social-buttons" target="blank"><img src={Gmail} alt="Gmail"/></a>
							</div>
						</span>
					</Navbar.Collapse>
				</div>
        </Navbar>
    )
}