import React from 'react'
import './pages.css'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'

function Trading() {
  return (
    <div class="container">
    <Navigation />
    <main class="main">
        <h2>Trading</h2>
        {/* <p> Calculator For Loans And Deposits <a routerLink="./calculator">Click Here</a></p> */}
        <div class="contact-container">
            <div class="contact-card">
                <h3><Link to="/buyshares">Buy Shares</Link></h3>
                <div class="contact-info">
                    <p>Buy your favourite stocks and increase you potential investments. </p>
                </div>
            </div>
            
            <div class="contact-card">
                <h3><Link to="/sellshares">Sell Shares</Link></h3>
                <div class="contact-info">
                    <p>Sell the stocks you currently own in your investment portfolio.</p>
                </div>
            </div>
        </div>
    </main> 
</div>
  )
}

export default Trading