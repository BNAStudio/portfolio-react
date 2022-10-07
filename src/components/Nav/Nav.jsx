// import PropTypes from "prop-types";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TbMessageCircle } from "react-icons/tb";
import "./Nav.css";

/**
 * ! No olvidar revisar la altura de la seccion en media pantalla
 */

const Nav = () => {
	return (
		<nav>
			<a href="#">
				<AiOutlineHome />
			</a>
			<a href="#about">
				<AiOutlineUser />
			</a>
			<a href="#experience">
				<BiBookAlt />
			</a>
			<a href="#services">
				<RiServiceLine />
			</a>
			<a href="#contact">
				<TbMessageCircle />
			</a>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
