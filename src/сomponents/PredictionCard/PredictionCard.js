import styles from './PredictionCard.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../Clock/Clock.js';
import DateText from '../DateText/DateText.js';

PredictionCard.propTypes = {
    prediction: PropTypes.object,
    showTime: PropTypes.bool,
};

function PredictionCard({ prediction, showTime = false }) {

    return (
        <div className={styles.predictionCard}>
            <div className={styles.background} />
            <div className={styles.content}>
                <DateText
                    className={styles.date}
                    date={prediction.date}
                />
                {showTime && (
                    <Clock className={styles.time} />
                )}
                <div className={styles.text}>
                    {prediction.text}
                </div>
            </div>
        </div>
    );
}

export default PredictionCard;