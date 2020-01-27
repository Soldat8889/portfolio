import React from 'react';
import PropTypes from 'prop-types';

function Link({ href, className, children }) {
    return (
        <a href={href} className={`Article__link ${className}`} target="_blank" rel="noopener noreferrer">{children}</a>
    );
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string
    ]).isRequired
};

export default Link;