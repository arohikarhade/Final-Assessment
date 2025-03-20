import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'


function Navigation() {
  return (
    <aside class="aside">   
    <h3>Navigation</h3>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/trading">Trading</Link></li>
    </ul>
</aside>
  )
}

export default Navigation