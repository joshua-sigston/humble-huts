import React from 'react'

// Router
import { NavLink } from 'react-router-dom'

// Styles
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header>
      <NavLink  to='/' 
                className={({isActive}) => isActive ? styles.active_link : ''}>
      Home
      </NavLink>

      <NavLink  to='/about'
                className={({isActive}) => isActive ? styles.active_link : ''}>
      About
      </NavLink>

      <NavLink  to='/huts' 
                className={({isActive}) => isActive ? styles.active_link : ''}>
      Huts
      </NavLink>
      
      <NavLink  to='/host' 
                className={({isActive}) => isActive ? styles.active_link : ''}>
      Host
      </NavLink>
    </header>
  )
}

export default Header