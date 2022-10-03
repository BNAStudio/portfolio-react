// import PropTypes from "prop-types";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
import CTA from "./CTA";
import MySelf from "../../assets/myself.png";

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Daniel</h1>
				<h5 className="text-light">FrontEnd Developer </h5>
				<CTA />
				<HeaderSocial />
				<div className="myself">
					<img src={MySelf} alt="portfolio author image" />
				</div>
				<a href="#contact" className="scroll-down">
					Scroll down
				</a>
			</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
