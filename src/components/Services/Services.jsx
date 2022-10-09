// import PropTypes from "prop-types";
import { AiOutlineCheck } from 'react-icons/ai'
import './Services.css'

const Services = () => {
	return (
		<section id='services'>
			<h5>What i offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				{/* --- UI/UX Design --- */}
				<article className="service">
					<div className="service__head">
						<h3> UI/UX Design </h3>
					</div>
					<ul className="service__list">
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>

				{/* --- Web development --- */}
				<article className="service">
					<div className="service__head">
						<h3> WEB Development </h3>
					</div>
					<ul className="service__list">
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>

				{/* --- Content creation --- */}
				<article className="service">
					<div className="service__head">
						<h3> Content creation </h3>
					</div>
					<ul className="service__list">
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
						<li>
							<AiOutlineCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>
			</div>

		</section>
	);
};

Services.propTypes = {};

export default Services;
