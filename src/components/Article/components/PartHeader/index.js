import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from './components/Bookmark';

function PartHeader({ id, short, title }) {
    return (
        <div className="Article__header">
            <Bookmark hash={id}>
                <h2 id={id} className="Article__title_level-2" data-article-checkpoint data-short-title={short}>{title}</h2>
            </Bookmark>
            <img className="Article__header__cubic" src="/images/utils/delimiter.svg" alt="Delimiter" />
        </div>
    );
}

PartHeader.propTypes = {
    id: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default PartHeader;