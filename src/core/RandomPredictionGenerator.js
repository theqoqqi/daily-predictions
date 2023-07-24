
import predictionsJson from '../data/predictions.json';

export default class RandomPredictionGenerator {

    #allPredictions;

    constructor() {
        this.#allPredictions = predictionsJson;
    }

    getForDate() {
        let index = Math.floor(Math.random() * this.#allPredictions.length);

        return this.#allPredictions[index];
    }
}