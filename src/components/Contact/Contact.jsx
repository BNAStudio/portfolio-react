// import PropTypes from "prop-types";
import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
	return (
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<AiOutlineMail className='contact__option-icon' />
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
						<BsMessenger className='contact__option-icon' />
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
						<BsWhatsapp className='contact__option-icon' />
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
				<form action="">
					<input type="text" name="name" placeholder="Your full name" required />
					<input type="email" name="email" placeholder="Your email" required />
					<textarea name="message" rows="7" placeholder="Your message" required />
					<button className="btn btn-primary" type="submit">Send a message</button>
				</form>
			</div>
		</section>
	);
};

Contact.propTypes = {};

export default Contact;
