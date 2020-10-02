import React from 'react'
import logo from '../assets/images/hn-logo.svg';

const Header = () => {
  return (
    <header className="header d-flex">
      <div className="container d-flex">
        <img src={logo} alt="logo" />
        <h1 className="header__title">HackerNews</h1>
      </div>
    </header>
  )
}

export default Header
