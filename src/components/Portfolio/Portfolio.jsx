// import PropTypes from "prop-types";
import "./Portfolio.css";
import imageProject from "../../assets/myself.png";

const data = [
	{
		id: 1,
		image: imageProject,
		title: "THIS IS A TITLE",
		github: "https://github.com/",
		demo: "https://netlify.com/",
	},
	{
		id: 2,
		image: imageProject,
		title: "THIS IS A TITLE",
		github: "https://github.com/",
		demo: "https://netlify.com/",
	},
	{
		id: 3,
		image: imageProject,
		title: "THIS IS A TITLE",
		github: "https://github.com/",
		demo: "https://netlify.com/",
	},
	{
		id: 4,
		image: imageProject,
		title: "THIS IS A TITLE",
		github: "https://github.com/",
		demo: "https://netlify.com/",
	},
	{
		id: 5,
		image: imageProject,
		title: "THIS IS A TITLE",
		github: "https://github.com/",
		demo: "https://netlify.com/",
	},
	{
		id: 6,
		image: imageProject,
		title: "THIS IS A TITLE",
		github: "https://github.com/",
		demo: "https://netlify.com/",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My recent work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{
					data.map(({ id, image, title, github, demo }) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={image} alt="" />
								</div>
								<h3>{title}</h3>
								<div className="portfolio__item-cta">
									<a
										href={github}
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
									<a
										href={demo}
										className="btn btn-primary"
										target="_blank"
										rel="noopener noreferre"
									>
										Live Demo
									</a>
								</div>
							</article>
						);
					})
				}
			</div>
		</section>
	);
};

Portfolio.propTypes = {};

export default Portfolio;
