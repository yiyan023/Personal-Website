import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

import logo from '../assets/yh.png';
import Insta from '../assets/instagram.png';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState("false"); 

	const navigate = useNavigate();

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

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "notScrolled"}>
            <Container>
                <Navbar.Brand href="/"><img src={logo} height="130" width="130" href="#home"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLink('skills'); navigate('/skills')}}>Skills</Nav.Link>
                        <Nav.Link to="/experiences" className={activeLink === 'experience' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLink('experience'); navigate('/experiences')}}>Experience</Nav.Link>
                        <Nav.Link href="/projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLink('projects'); navigate('/projects')}}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.instagram.com/yiyanhh" className="social-buttons"><img src={Insta}/></a>
                            <a href="https://github.com/yiyan023" className="social-buttons"><img src={GitHub}/></a>
                            <a href="https://www.linkedin.com/in/yiyanhh23/" className="social-buttons"><img src={LinkedIn}/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}