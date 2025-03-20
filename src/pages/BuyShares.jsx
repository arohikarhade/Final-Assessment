import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const BuyShares = () => {
    const [selectedShare, setSelectedShare] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // For loading state
    const [error, setError] = useState(null); // For error handling

    const shares = [
        { company: 'ABC Corp', available: 500, price: 120, flow: 'up' },
        { company: 'XYZ Ltd', available: 300, price: 80, flow: 'down' },
        { company: 'Tech Innovations', available: 200, price: 150, flow: 'up' },
        { company: 'Finance Solutions', available: 450, price: 95, flow: 'down' },
    ];

    const handleRowClick = (share) => {
        setSelectedShare(share);
        setError(null); // Clear previous errors
    };

    const closeModal = () => {
        setSelectedShare(null);
    };

    // Handle Buy Now functionality
    const handleBuyNow = async () => {
        if (!selectedShare) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://your-ngrok-url/buy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    company: selectedShare.company,
                    quantity: 1, // Example quantity; adjust as needed
                    price: selectedShare.price
                })
            });

            const result = await response.json();

            if (response.ok) {
                alert(`Successfully bought 1 share of ${selectedShare.company} at $${selectedShare.price.toFixed(2)}`);
            } else {
                throw new Error(result.message || 'Failed to purchase shares.');
            }
        } catch (err) {
            setError(`Error: ${err.message}`);
        } finally {
            setIsLoading(false);
            closeModal();
        }
    };

    return (
        <div className="container">
            <Navigation />
            <div className="main">
                <h2>Buy Shares</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Available Shares</th>
                            <th>Price/Share</th>
                            <th>Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shares.map((share, index) => (
                            <tr key={index} onClick={() => handleRowClick(share)}>
                                <td>{share.company}</td>
                                <td>{share.available}</td>
                                <td>${share.price.toFixed(2)}</td>
                                <td
                                    className={share.flow === 'up' ? 'upflow' : 'downflow'}
                                >
                                    {share.flow === 'up' ? '📈 Upward' : '📉 Downward'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Modal for Share Details */}
                {selectedShare && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>{selectedShare.company}</h3>
                            <p><strong>Available Shares:</strong> {selectedShare.available}</p>
                            <p><strong>Price per Share:</strong> ${selectedShare.price.toFixed(2)}</p>
                            <p><strong>Status:</strong> {selectedShare.flow === 'up' ? '📈 Upflow' : '📉 Downflow'}</p>

                            {error && <p className="error">{error}</p>}

                            <div className="modal-buttons">
                                <button
                                    className="submit-btn"
                                    onClick={handleBuyNow}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Processing...' : 'Buy Now'}
                                </button>

                                <button className="confirm-btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BuyShares;
