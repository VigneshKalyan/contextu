import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Top 10 Cryptocurrencies</h1>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <TableRow key={index} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
