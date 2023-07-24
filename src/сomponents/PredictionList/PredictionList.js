import styles from './PredictionList.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import PredictionCard from '../PredictionCard/PredictionCard.js';

PredictionList.propTypes = {
    predictions: PropTypes.array,
};

function PredictionList({ predictions }) {

    return (
        <div className={styles.predictionList}>
            {predictions.map((prediction, index) => (
                <PredictionCard
                    key={prediction.date}
                    prediction={prediction}
                    showTime={index === 0}
                />
            ))}
        </div>
    );
}

export default PredictionList;