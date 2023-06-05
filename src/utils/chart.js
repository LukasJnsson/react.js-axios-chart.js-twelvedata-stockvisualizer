
/**
 * Function that iterates through an array with objects and selects the date for each object
 * @param {Array} arr - The array with the objects containing dates
 * @returns {Array} - The array with the dates
 */
export function getDates(arr) {

    if (arr.length > 0) {
        const dates = [];
        for (let i = 0; i < arr.length; i++) {
            dates.push(arr[i]['Date']);
        };
        return dates.reverse(); // reverse() since the latest days should be displayed to the far right
    };
};


/**
 * Function that iterates through an array with objects and selects the close price for each object
 * @param {Array} arr - The array with the objects containing the close prices
 * @returns {Array} - The array with the close prices
 */
export function getPrice(arr) {

    if (arr.length > 0) {
        const prices = [];
        for (let i = 0; i < arr.length; i++) {
            prices.push(arr[i]['Close price']);
        };
        return prices.reverse(); // reverse() since the latest days should be displayed to the far right
    };
};