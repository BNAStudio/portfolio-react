// import PropTypes from 'prop-types'
import CV from "../../assets/CV.pdf";
import MySelf from "../../assets/myself.png";

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} className="btn">
				Download CV
			</a>
			<a href="#contact" className="btn btn-primary">
				Let's talk
			</a>
			<div className="myself">
				<img src={MySelf} alt="portfolio author image" />
			</div>
		</div>
	);
};

CTA.propTypes = {};

export default CTA;
