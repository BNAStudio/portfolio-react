// import PropTypes from "prop-types";
import {
	AiFillLinkedin,
	AiOutlineDribbble,
	AiFillGithub,
} from "react-icons/ai";

const HeaderSocial = () => {
	return (
		<div className="header__social">
			<a href="https://linkedin.com" target="_blank" rel="noreferrer">
				<AiFillLinkedin />
			</a>
			<a href="https://github.com/" target="_blank" rel="noreferrer">
				<AiFillGithub />
			</a>
			<a href="https://dribbble.com/" target="_blank" rel="noreferrer">
				<AiOutlineDribbble />
			</a>
		</div>
	);
};

HeaderSocial.propTypes = {};

export default HeaderSocial;
