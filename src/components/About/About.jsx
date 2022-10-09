// import PropTypes from "prop-types";
import MySelf from "../../assets/myself.png";
import "./About.css";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={MySelf} alt="Cat image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<BsAward className="about__icon" />
							<h5>Experience</h5>
							<small>3+ Years working</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>

						<article className="about__card">
							<AiFillFolderOpen className="about__icon"/>
							<h5>Project</h5>
							<small>80+ Complete projects</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ea
						nisi sed, impedit beatae ipsum itaque vero incidunt aliquid,
						expedita odit dolorum deleniti iste quae labore commodi quia porro
						necessitatibus.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's talk
					</a>
				</div>
			</div>
		</section>
	);
};

About.propTypes = {};

export default About;
