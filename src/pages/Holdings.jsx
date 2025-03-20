import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Holdings = () => {
    const [holdings, setHoldings] = useState([
        { name: 'MSFT', quantity: 10, price: 290.5 },
        { name: 'GOOGL', quantity: 5, price: 2800.35 },
    ]);

    const totalInvestment = holdings.reduce(
        (total, stock) => total + stock.quantity * stock.price,
        0
    );

    return (
        <div className='container'>
            <Navigation />
            <div className="main">
                <h2>Holdings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Quantity</th>
                            <th>Price ($)</th>
                            <th>Total Value ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {holdings.map((stock, index) => (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{(stock.quantity * stock.price).toFixed(2)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="3"><strong>Total Investment:</strong></td>
                            <td><strong>${totalInvestment.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Holdings;
