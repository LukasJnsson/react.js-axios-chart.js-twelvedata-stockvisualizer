
import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getStocks } from '../utils/twelve-data';



export default function Search(props) {
  const { setSelectedStock } = props;
  const [stocks, setStocks] = useState([]);


  /**
   * Function that fetch and set the array with the stocks listed on the market
   */
  useEffect(function() {
    async function fetchStocks() {
        const market = 'NASDAQ';
        const stocks = await getStocks(market);
        setStocks(stocks);
    };
    fetchStocks();
  }, [] );


  /**
   * Function that gets the selected stock
   * @param {Object} event - The event that invoked the function
   * @param {object} stock - The selected stock
   */
  function getSelectedStock(event, stock) {
    setSelectedStock(stock);
  };


  return (
    <div id='search'>
        <Autocomplete
        disablePortal
        options={stocks}
        getOptionLabel={(stock) => `${stock.name} (${stock.symbol})`}
        sx={{ width: '40%', backgroundColor: 'white'}}
        renderInput={(params) => <TextField {...params} label="Select..."/>}
        onChange={getSelectedStock}
        />
    </div>
  );
};