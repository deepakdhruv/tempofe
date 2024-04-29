import React, { useState, useEffect } from 'react';
import "./components.css"
const QCombineComponent = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    const url = 'https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&apiKey=xsX2einroWYZAiCKZzQJaKDgWmpxOPfH';

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.status === 'OK') {
        const exchangesData = result.results.slice(0, 5);
        setExchanges(exchangesData);
      } else {
        console.error(`Error in API response: ${result.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="q-combine">
      {exchanges.map((exchange, index) => (
        <div className="card" key={index}>
          <div className="card-title">{exchange.name}</div>
          <div className="card-text">Exchange Acronym: {exchange.acronym || 'N/A'}</div>
          <div className="card-text">MIC: {exchange.mic}</div>
          <div className="card-text">Operating MIC: {exchange.operating_mic}</div>
          <div className="card-text">URL: <a className="card-link" href={exchange.url} target="_blank" rel="noreferrer">{exchange.url}</a></div>
        </div>
      ))}
    </div>
  );
};

export default QCombineComponent;
