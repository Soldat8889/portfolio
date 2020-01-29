import React from 'react';
import PropTypes from 'prop-types';

function Author({ author, imagePath }) {
    return (
        <div className="Article__author">
            <span className="Article__author_profile_wrapper">
                <img src={imagePath} alt={`${author} - Profile`} className="Article__author_profile" />
            </span>
            <span className="Article__author_name">{author}</span>
        </div>
    );
}

Author.propTypes = {
    author: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired
};

export default Author;