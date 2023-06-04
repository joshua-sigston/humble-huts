import React, { useState } from 'react'

// Router
import { NavLink } from 'react-router-dom'

// Styles
import styles from '../styles/header.module.css'

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan } from '@fortawesome/free-solid-svg-icons'

// Components
import Hamburger from './Hamburger'

const Header = () => {
  const [ mobileNav, setMobileNav ] = useState(false)
  
  const activeLink = {
    color: '#568EA3'
  }

  const handleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  const reveal = {left: !mobileNav ? '100%' : '0%'}
  
  return (
    <header>
      <div className={styles.logo_container}>
          <NavLink  to='/' 
                    className={styles.header_link}>
          <FontAwesomeIcon icon={faCaravan} className={styles.home_link}/>
          </NavLink>
      </div>

      <Hamburger handleMobileNav={handleMobileNav} mobileNav={mobileNav}/>
      
      <nav className={styles.mobile_nav} style={reveal}>
          <NavLink  to='/' 
                    className={styles.header_link}
                    style={({isActive}) => isActive ? activeLink : null}
                    onClick={handleMobileNav}>
          Home
          </NavLink>

        <NavLink  to='/about'
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}
                  onClick={handleMobileNav}>
        About
        </NavLink>

        <NavLink  to='/vans' 
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}
                  onClick={handleMobileNav}>
        Vans
        </NavLink>
        
        <NavLink  to='/host' 
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}
                  onClick={handleMobileNav}>
        Host
        </NavLink>
        <NavLink  to='/login' 
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}
                  onClick={handleMobileNav}>
        Login
        </NavLink>
      </nav>
    </header>
  )
}

export default Header