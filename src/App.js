import styles from './App.module.css';
import PredictionList from './сomponents/PredictionList/PredictionList.js';
import {useEffect, useState} from 'react';
import PredictionGenerator from './core/PredictionGenerator.js';

function generatePredictions(generator) {
    let dates = [
        new Date(),
        new Date(Date.now() + 86400000),
        new Date(Date.now() + 86400000 * 2),
    ];

    return dates.map(date => {
        return {
            date,
            text: generator.getForDate(date),
        };
    });
}

function App() {
    let [generator] = useState(new PredictionGenerator());
    let [predictions, setPredictions] = useState([]);
    let [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        setInterval(() => {
            setCurrentDay(new Date().toLocaleDateString());
        }, 1000);
    }, []);

    useEffect(() => {
        setPredictions(generatePredictions(generator));
    }, [currentDay]);

    return (
        <div className={styles.app}>
            <PredictionList predictions={predictions} />
        </div>
    );
}

export default App;
