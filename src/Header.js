import React from "react"
import "./styles.css"

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <img
          src={
            "https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072.2-s.png"
          }
          alt="Property Listings Logo"
        />
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Listings</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
