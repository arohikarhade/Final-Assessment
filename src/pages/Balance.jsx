import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Balance = () => {
    const [initialDeposit, setInitialDeposit] = useState(1000); // Example default deposit
    const [investment, setInvestment] = useState(2050.85); // Example investment

    const remainingBalance = initialDeposit - investment;

    return (
        <div className='container'>
            <Navigation />
            <div className="main">
                <h2>Balance Details</h2>
                <div className="balance-card">
                    <div className="balance-info">
                        <p><strong>Initial Deposit:</strong> ${initialDeposit.toFixed(2)}</p>
                        <p><strong>Total Investment:</strong> ${investment.toFixed(2)}</p>
                        <p><strong>Remaining Balance:</strong> ${remainingBalance.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
