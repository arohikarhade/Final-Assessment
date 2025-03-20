import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([
        { name: 'AAPL', price: 175.23 },
        { name: 'TSLA', price: 850.67 },
        { name: 'AMZN', price: 3100.45 },
        { name: 'Google', price: 4500.72},
    ]);

    return (
        <div class="container">
            <Navigation />
            <div className="main">
                <h2>Watchlist</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Price ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((stock, index) => (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Watchlist;
