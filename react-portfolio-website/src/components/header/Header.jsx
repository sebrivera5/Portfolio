import React from 'react'
import './header.css'
import Cinfo from './info.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello
        </h5>
        <h1>Sebastian Rivera</h1>
        <Cinfo />
      </div>

    </header>
  )
}

export default Header