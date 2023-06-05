
import axios from "axios";


/**
 * Function that fetch all stocks listed on a specified stock market
 * @param {String} market - The desired market (OMX = Stockholm, NASDAQ = New York)
 * @returns {Object} - All the listed stocks
 */
export async function getStocks(market) {
    try {
        const url = `https://api.twelvedata.com/stocks?&exchange=${market}`;
        const response = await axios.get(url);
        const stocks = response.data.data;

        const stocksArr = [];
        for (let i = 0; i < stocks.length; i++) {
            const stock = {
                'symbol': stocks[i].symbol,
                'name': stocks[i].name
            };
            stocksArr.push(stock);
        };
        return stocksArr;
    } catch (error) {
        throw new Error(`Error fetching stocks ${error.message}`);
    };
};


/**
 * Function that fetch the price history with a 30-day interval for a specific stock
 * @param {String} stockSymbol - The symbol of the stock
 * @param {String} apiKey - The API Key
 * @returns {Object} - The price history of the stock
 */
export async function getPriceHistory(stockSymbol, apiKey) {
    try {
        const url = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=1day&outputsize=30&apikey=${apiKey}`;
        const response = await axios.get(url);
        const history = response.data.values;
        
        const stockHistoryArr = [];
        for (let i = 0; i < history.length; i++) {
            // Select the desired price data
            const stockHistory = {
                'Date': history[i].datetime,
                'Close price': history[i].close
            };
            stockHistoryArr.push(stockHistory);
        };
        return stockHistoryArr;
    } catch (error) {
        throw new Error(`Error fetching stocks ${error.message}`);
    };
};