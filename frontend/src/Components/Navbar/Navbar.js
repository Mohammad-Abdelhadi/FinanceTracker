import React from 'react'
// import Link from 'react-dom'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import plus from '../../Images/plus.svg'
import chart from '../../Images/chart.svg'
import wallet from '../../Images/wallet.svg'
import user from '../../Images/user.svg'
import home from '../../Images/home.svg'
import {Link} from "react-router-dom"

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
const Navbar = () => {
  return (
    <Nav
    activeKey="home"
   
    className="navbar fixed-bottom navbar-light bg-light  "
  >
    <Nav.Item>
      <Link to="homepage">
        <img src={home} alt="" className='home'/>
        </Link>
    </Nav.Item>
    <Nav.Item>
      <Link  to="/statistic" eventKey="statistic"><img src={chart} alt="" className='chart' /></Link>
    </Nav.Item>
  
     <Link to ="expense"><img src={plus} alt="" className='plus' /></Link>
 
    <Nav.Item>
      <Link to="Wallet" eventKey="Wallet"><img src={wallet} alt="" className='wallet'/></Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="UserProfile" eventKey="UserProfile"><img src={user} alt="" className='user'/></Link>
    </Nav.Item>
    
  </Nav>
  )
}

export default Navbar