import React from 'react'

// Router
import { Outlet, NavLink } from 'react-router-dom'

// Styles
import styles from '../styles/header.module.css'

const HostLayout = () => {

  const activeLink = {
    color: '#568EA3'
  }

  return (
    <div>
      <header>
        <NavLink  to='.'
                  end
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}>
          Host
        </NavLink>

        <NavLink  to='reviews'
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}>
          Reviews
        </NavLink>

        <NavLink  to='income'
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}>
          Income
        </NavLink>

        <NavLink  to='my-vans'
                  className={styles.header_link}
                  style={({isActive}) => isActive ? activeLink : null}>
          My Vans
        </NavLink>
    </header>
    <Outlet />
    </div>
  )
}

export default HostLayout
