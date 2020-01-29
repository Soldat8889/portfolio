import React from "react";
import PropTypes from 'prop-types';

function Hero({ children }) {
    return (
        <div className="page-content page-part-wrapper">
            <div className="Article__hero_wrapper">
                {children}
            </div>
        </div>
    );
}

Hero.propTypes = {
    children: PropTypes.object.isRequired
};

export default Hero;