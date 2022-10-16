// import PropTypes from "prop-types";
import './Footer.css'
import imageProject from "../../assets/myself.png";
import { AiOutlineFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
	return (
		<footer>
			<a className="footer__logo" href={imageProject}></a>
			<ul className="permalinks">
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="https://facebook.com"><AiOutlineFacebook/></a>
				<a href="https://github.com"><AiFillGithub /></a>
				<a href="https://linkedin.com"><AiFillLinkedin /></a>
			</div>

			<div className="footer__copyright">
				<small>&copy; BNA Studio |  All rights reserved </small>
			</div>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
