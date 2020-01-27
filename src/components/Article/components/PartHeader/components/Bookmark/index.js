import React from "react";
import PropTypes from "prop-types";

// Services
import HandleHash from "../../../../services/handleHash";

function Bookmark({ hash, children }) {
    /**
     * 
     * @param {Event} e 
     */
    function handleGoToHash(e) {
        e.preventDefault();
        window.history.pushState(null, null, `#${hash}`);
        HandleHash("instant", 0);
    }
    return (
        <div className="Article__bookmark_wrapper">
            <a className="Article__bookmark fas" href={`#${hash}`} onClick={handleGoToHash}>
                ¶
            </a>
            {children}
        </div>
    );
}

Bookmark.propTypes = {
    hash: PropTypes.string.isRequired
};

export default Bookmark;