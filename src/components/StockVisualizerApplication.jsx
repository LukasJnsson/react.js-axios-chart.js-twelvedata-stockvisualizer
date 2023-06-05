
import React, { useState } from 'react'
import Header from './Header.jsx'
import Search from './Search.jsx';
import Animation from './Animation.jsx';
import Chart from './Chart.jsx';


export default function StockVisualizerApplication() {
  const [selectedStock, setSelectedStock] = useState();


  /**
   * Function that set the 'selectedStock' state when a stock is selected
   * @param {Object} stock - The selected stock
   */
  function stateManagerSelectedStock(stock) {
    setSelectedStock(stock);
  };


  return (
    <div className="background">
        <Animation count={50} /> {/* count = the number of animations, maximum 50 */}
        <Header />
        <Search setSelectedStock={stateManagerSelectedStock} />
        <Chart selectedStock={selectedStock} />
    </div>
  );
};