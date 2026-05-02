import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import '../../styles/nav.css'

import logo from '../../images/home/yh.png';
import Substack from '../../images/social-icons/substack.png';
import GitHub from '../../images/social-icons/github.png';
import LinkedIn from '../../images/social-icons/linkedin.png';
import Gmail from '../../images/social-icons/email.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState("false"); 
	const [navExpanded, setNavExpanded] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

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
        <Navbar
			expand="lg"
			expanded={navExpanded}
			onToggle={setNavExpanded}
			className={scrolled ? "scrolled" : "notScrolled"}
		>
                <Navbar.Brand href="/"><img src={logo} height="75" href="#home" alt="logo"/>
                </Navbar.Brand>
                <div className="toggle">
					<Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={navExpanded}>
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link to="/experiences" className={activeLink === 'experience' ? "active navbar-link" : "navbar-link"} onClick={() => { setNavExpanded(false); onUpdateActiveLink('experience'); navigate('/experiences'); }}>Experience</Nav.Link>
							<Nav.Link to="/extracurriculars" className={activeLink === 'extracurriculars' ? "active navbar-link" : "navbar-link"} onClick={() => { setNavExpanded(false); onUpdateActiveLink('extracurriculars'); navigate('/extracurriculars'); }}>Extracurriculars</Nav.Link>
							<Nav.Link to="/awards" className={activeLink === 'awards' ? "active navbar-link" : "navbar-link"} onClick={() => { setNavExpanded(false); onUpdateActiveLink('awards'); navigate('/awards'); }}>Awards</Nav.Link>
							<Nav.Link to="/projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => { setNavExpanded(false); onUpdateActiveLink('projects'); navigate('/projects'); }}>Projects</Nav.Link>
							<Nav.Link to="/blogs" className={activeLink === 'blogs' ? "active navbar-link" : "navbar-link"} onClick={() => { setNavExpanded(false); onUpdateActiveLink('blogs'); navigate('/blogs'); }}>Blogs</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a href="https://yiyanhh.substack.com/" className="social-buttons" target="blank"><img src={Substack} alt="Substack"/></a>
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