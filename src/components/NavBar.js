import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/yh.png';
import Insta from '../assets/instagram.png';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState("false"); 

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
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#experiences" className={activeLink === 'experience' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="" className="social-buttons"><img src={Insta}/></a>
                            <a href="" className="social-buttons"><img src={GitHub}/></a>
                            <a href="" className="social-buttons"><img src={LinkedIn}/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}