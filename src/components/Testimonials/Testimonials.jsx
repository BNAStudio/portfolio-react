// import PropTypes from "prop-types";
import './Testimonials.css'
import imageProject from "../../assets/myself.png";


const Testimonials = () => {



	return (
		<section id='testiomonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<div className="container testimonials-container">
				<article className="testimonial">
					<div className="client__avatar">
						<img src={imageProject} alt="" />
					</div>
					<h5 className="client__name">Ernest Achiver</h5>
						<small className="client__review">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eius error est, aliquam ex corporis. Quia neque obcaecati enim maxime, expedita, explicabo delectus ipsum sint maiores veniam mollitia, velit perspiciatis!
						</small>
				</article>
				<article className="testimonial">
					<div className="client__avatar">
						<img src={imageProject} alt="" />
					</div>
					<h5 className="client__name">Ernest Achiver</h5>
						<small className="client__review">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eius error est, aliquam ex corporis. Quia neque obcaecati enim maxime, expedita, explicabo delectus ipsum sint maiores veniam mollitia, velit perspiciatis!
						</small>
				</article>
				<article className="testimonial">
					<div className="client__avatar">
						<img src={imageProject} alt="" />
					</div>
					<h5 className="client__name">Ernest Achiver</h5>
						<small className="client__review">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eius error est, aliquam ex corporis. Quia neque obcaecati enim maxime, expedita, explicabo delectus ipsum sint maiores veniam mollitia, velit perspiciatis!
						</small>
				</article>
				<article className="testimonial">
					<div className="client__avatar">
						<img src={imageProject} alt="" />
					</div>
					<h5 className="client__name">Ernest Achiver</h5>
						<small className="client__review">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eius error est, aliquam ex corporis. Quia neque obcaecati enim maxime, expedita, explicabo delectus ipsum sint maiores veniam mollitia, velit perspiciatis!
						</small>
				</article>
			</div>
		</section>
	);
};

Testimonials.propTypes = {};

export default Testimonials;
