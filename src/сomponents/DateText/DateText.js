import React from 'react';
import PropTypes from 'prop-types';

DateText.propTypes = {
    className: PropTypes.string,
    date: PropTypes.instanceOf(Date),
};

function DateText({ className, date }) {
    return (
        <time className={className}>
            {date.toLocaleDateString()}
        </time>
    );
}

export default DateText;
