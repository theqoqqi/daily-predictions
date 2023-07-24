import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    className: PropTypes.string,
};

function Clock({ className }) {
    let [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 500);
    }, []);

    return (
        <time className={className}>
            {currentTime.toLocaleTimeString()}
        </time>
    );
}

export default Clock;