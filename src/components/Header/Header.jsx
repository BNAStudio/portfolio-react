// import PropTypes from "prop-types";
import CTA from "./CTA";

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Daniel</h1>
				<h5 className="text-light">FrontEnd Developer </h5>
				<CTA />
			</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
