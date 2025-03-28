import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';

const Balance = () => {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const userId = '12345'; // Example userId (replace with actual logic)

    // Fetch balance on component load
    useEffect(() => {
        fetchBalance();
    }, []);

    const fetchBalance = async () => {
        try {
            const response = await axios.get(`https://<your-ngrok-url>/balance/${userId}`);
            setBalance(response.data.balance);
        } catch (err) {
            setError('Failed to fetch balance. Please try again.');
        }
    };

    const handleTransaction = async (type) => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            setError('Please enter a valid amount.');
            return;
        }

        const endpoint = type === 'deposit' 
            ? 'https://<your-ngrok-url>/balance/deposit'
            : 'https://<your-ngrok-url>/balance/withdraw';

        try {
            await axios.post(endpoint, {
                userId,
                amount: Number(amount)
            });
            setAmount('');
            fetchBalance(); // Refresh balance after transaction
        } catch (err) {
            setError(`Failed to ${type} funds. Please try again.`);
        }
    };

    return (
        <div className='container'>
            <Navigation />
            <div className="main">
                <h2>Balance Details</h2>
                <div className="balance-card">
                    <div className="balance-info">
                        <p><strong>Current Balance:</strong> ${balance.toFixed(2)}</p>
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="form-group"
                        />
                        <div className="modal-buttons">
                            <button className="submit-btn" onClick={() => handleTransaction('deposit')}>
                                Add Balance
                            </button>
                            <button className="submit-btn" onClick={() => handleTransaction('withdraw')}>
                                Remove Balance
                            </button>
                        </div>
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
