import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ImagePlaceholder({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);

    function handleImageLoad() {
        const src = children.props.src;

        const image = new Image();
        image.src = src;

        image.onload = () => {
            setIsLoaded(true);
        };

        image.onerror = () => {
            console.error(`An error has been occurred, in this following url: ${src}`);
            setIsLoaded(true);
        };
    }

    useEffect(() => {
        handleImageLoad();
    });

    return (
        <div className="Placeholder_wrapper Placeholder_image" data-loaded={isLoaded}>
            {children}
            <span className="Placeholder__loader"></span>
        </div>
    );
}

ImagePlaceholder.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string
    ]).isRequired
};

export default ImagePlaceholder;