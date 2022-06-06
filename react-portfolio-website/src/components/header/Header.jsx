import React from 'react'
import './header.css'
import Cinfo from './info.jsx'
import PFP from '../../assets/branzino.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          My name is
        </h5>
        <h1>Sebastian Rivera</h1>
        <Cinfo />
        <HeaderSocials />

        <div className='pfp'>
          <img src={PFP} alt='pfp'/>
        </div>

        <a href="#contact" className ='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header