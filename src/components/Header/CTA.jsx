// import PropTypes from 'prop-types'
import CV from "../../assets/CV.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} className="btn" target="_blank" rel="noreferrer noopener">
				Download CV
			</a>
			<a href="#contact" className="btn btn-primary">
				Let's talk
			</a>
		</div>
	);
};

CTA.propTypes = {};

export default CTA;
