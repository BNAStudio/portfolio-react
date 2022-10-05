// import PropTypes from 'prop-types'
import MySelf from "../../assets/myself.png";

const HeaderCat = props => {
	return (
        <div className="myself">
            <div className="circles"></div>
            <img src={MySelf} alt="portfolio author image" />
        </div>
    )
};

HeaderCat.propTypes = {};

export default HeaderCat;
