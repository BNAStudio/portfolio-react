// import PropTypes from "prop-types";
import { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
	const form = useRef();
	const emailServiceID = "service_vrjqqk7";
	const templateServiceID = "template_sv7w90q";
	const key = "4dM2XWxaKBFfb_j-3";

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_vrjqqk7",
				"template_sv7w90q",
				form.current,
				"4dM2XWxaKBFfb_j-3"
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
			e.target.reset()
	};
	return (
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<AiOutlineMail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>danielmark999@gmail.com</h5>
						<a
							href="mailto:danielmark999@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Send me a message
						</a>
					</article>
					<article className="contact__option">
						<BsMessenger className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>danielmark999</h5>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Send me a message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>Whats app</h4>
						<h5>Daniel Marcovich</h5>
						<a
							href="https://api.whatsapp.com/send?phone+513153277847"
							target="_blank"
							rel="noopener noreferrer"
						>
							Send me a message
						</a>
					</article>
				</div>
				{/* --- Form --- */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your full name"
						required
					/>
					<input type="email" name="email" placeholder="Your email" required />
					<textarea
						name="message"
						rows="7"
						placeholder="Your message"
						required
					/>
					<button className="btn btn-primary" type="submit">
						Send a message
					</button>
				</form>
			</div>
		</section>
	);
};

Contact.propTypes = {};

export default Contact;
