
import predictionsJson from '../data/predictions.json';

export default class PredictionGenerator {

    #allPredictions;

    constructor() {
        this.#allPredictions = predictionsJson;
    }

    getForDate(date) {
        let hashCode = PredictionGenerator.#getHashCode(date.toLocaleDateString());
        let index = Math.abs(hashCode) % this.#allPredictions.length;

        return this.#allPredictions[index];
    }

    /**
     * @param {String} string
     * */
    static #getHashCode(string) {
        let hash = 0;

        if (string.length === 0) {
            return hash;
        }

        for (let i = 0; i < string.length; i++) {
            let chr = string.charCodeAt(i);

            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }

        return hash;
    }
}