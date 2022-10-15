// import PropTypes from "prop-types";
import "./Testimonials.css";
import imageProject from "../../assets/myself.png";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
	const data = [
		{
			avatar: imageProject,
			name: "John Doe",
			review:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga aliquam, magnam quis cum odit itaque rerum odio debitis, mollitia dolore adipisci ex minima minus officia voluptatem modi similique maxime?",
		},
		{
			avatar: imageProject,
			name: "John Doe",
			review:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sed libero iure dignissimos provident vitae deleniti est voluptas perspiciatis aperiam?",
		},
		{
			avatar: imageProject,
			name: "John Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellat rem quos laboriosam mollitia dolore atque dolorem. Voluptatem architecto eum accusantium voluptate commodi quas expedita?",
		},
		{
			avatar: imageProject,
			name: "John Doe",
			review:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus dolorem, voluptas quae exercitationem minus dolores.",
		},
	];

	return (
		<section id="testiomonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="container testimonials-container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

Testimonials.propTypes = {};

export default Testimonials;
