import React from "react";
import PropTypes from 'prop-types';

function Attachment({ type, children }) {
    return (
       <div className="Article__attachment">
           <div className={`Article__attachment__wrapper${type === "inline" ? "_inline" : ""}`}>
                {children}
           </div>
        </div> 
    );
}

Attachment.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string
    ]).isRequired
};

export default Attachment;