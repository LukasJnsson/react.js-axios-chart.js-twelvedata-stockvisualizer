
import React, { useEffect, useState, useRef } from 'react';
import { getPriceHistory } from '../utils/twelve-data';
import { getDates, getPrice } from '../utils/chart';
import { Chart as Chartjs } from 'chart.js/auto';


export default function Chart(props) {
  const { selectedStock } = props;
  const symbol = selectedStock ? selectedStock.symbol : '';
  const [stockHistory, setStockHistory] = useState([]);
  const chartRef = useRef(null);


  /**
   * Function that invokes the function 'getPriceHistory()' that fetch the history of the selected stock
   */
  useEffect(function() {
    // eslint-disable-next-line
    if (!symbol == '') {
      async function fetchStockHistory() {
        const history = await getPriceHistory(symbol, process.env.REACT_APP_API_KEY);
        setStockHistory(history);
      };
      fetchStockHistory();
    };
  }, [symbol] );


  /**
   * Function that creates the chart based on the fetched data
   */
  // eslint-disable-next-line
  useEffect(function() { {/* useEffect hook executes on each render, therefore the chart gets updated automatically when changing stock */}
    const dateHistory = getDates(stockHistory);
    const priceHistory = getPrice(stockHistory);

    const data = {
      labels: dateHistory,
      datasets: [{
        label: selectedStock ? selectedStock.name : '',
        data: priceHistory,
        fill: false,
        borderColor: '#0055ff',
        borderWidth: 4,
      }]
    };

    const labelColor = {
      scales: {
        y: {
          ticks: {
            color: 'white',
          }
        },
        x: {
          ticks: {
            color: 'white',
          }
        }
      }
    };

    const config = {
      type: 'line',
      data: data,
      options: labelColor
    };

    if (chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, config);
      return function() {
        chartInstance.destroy();
      }
    };
  });


  return (
    <div id='chart'>
      {selectedStock ? <canvas ref={chartRef} /> : null} {/* Chart.js use the canvas element by convention */}
    </div>
  );
};