// import PropTypes from "prop-types";
import "./Portfolio.css";
import imageProyect from '../../assets/myself.png'

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My recent work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">

				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={imageProyect} alt="" />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://netlify.com/"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferre"
						>
							Live Demo
					</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={imageProyect} alt="" />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://netlify.com/"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferre"
						>
							Live Demo
					</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={imageProyect} alt="" />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://netlify.com/"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferre"
						>
							Live Demo
					</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={imageProyect} alt="" />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://netlify.com/"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferre"
						>
							Live Demo
					</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={imageProyect} alt="" />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://netlify.com/"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferre"
						>
							Live Demo
					</a>
					</div>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={imageProyect} alt="" />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://netlify.com/"
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferre"
						>
							Live Demo
					</a>
					</div>
				</article>
			</div>
		</section>
	);
};

Portfolio.propTypes = {};

export default Portfolio;
