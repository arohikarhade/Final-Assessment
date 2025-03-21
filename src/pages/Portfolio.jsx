import React from 'react'
import './pages.css'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div class="container">
    <Navigation />
    <main class="main">
        <h2>Your Portfolio</h2>
        {/* <p> Calculator For Loans And Deposits <a routerLink="./calculator">Click Here</a></p> */}
        <div class="contact-container">
            <div class="contact-card">
                <h3><Link to="/watchlist">Watchlist</Link></h3>
                <div class="contact-info">
                    <p>Monitor your favourite stocks for potential investment opportunities. </p>

                </div>
            </div>
            
            <div class="contact-card">
                <h3><Link to="/holdings">Holdings</Link></h3>
                <div class="contact-info">
                    <p>Track the stocks you currently own in your investment portfolio.</p>

                </div>
            </div>
            <div class="contact-card">
                <h3><Link to="/balance">Balance</Link></h3>
                <div class="contact-info">
                    <p>View your available funds and total investment value at a glance.</p>

                </div>
            </div>
        </div>
    </main> 
</div>
  )
}

export default Portfolio