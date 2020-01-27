import React from 'react';
import PropTypes from 'prop-types';

// Components
import ImagePlaceholder from './components/ImagePlaceholder';
import TextPlaceholder from './components/TextPlaceholder';

function Placeholder({ type, children }) {
    switch (type) {
        case "image":
            return <ImagePlaceholder>{children}</ImagePlaceholder>;

        case "text":
            return <TextPlaceholder>{children}</TextPlaceholder>;
    
        default:
            return <ImagePlaceholder>{children}</ImagePlaceholder>;
    }
}

Placeholder.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string
    ]).isRequired
}

export default Placeholder;