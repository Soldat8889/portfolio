import React, { Fragment } from "react";
import PropTypes from 'prop-types';

function SectionHeader({ background, title, content }) {
    return (
        <Fragment>
            <div className="Article_background">
                {background}
            </div>
            <div className="Article">
                <div className="Article__title_wrapper">
                    <h1 className="Article__title_level-1" data-article-section>{title}</h1>
                </div>
                {content}
            </div>
        </Fragment>
    );
}

SectionHeader.propTypes = {
    background: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired
};

export default SectionHeader;