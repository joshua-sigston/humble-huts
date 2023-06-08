import React, { useState } from 'react'

// Router
import { Outlet, NavLink, Navigate, useLoaderData } from 'react-router-dom'

// Styles
import styles from '../styles/header.module.css'

export function loader() {
  const isLoggedIn = localStorage.getItem('loggedIn')
  return isLoggedIn
}

const HostLayout = () => {
  const checkLoggedIn = useLoaderData()
  console.log(checkLoggedIn)
  const activeLink = {
    color: '#568EA3'
  }

  // if(checkLoggedIn || checkLoggedIn === null) {
  //   return <Navigate to='/login?message=You must log in first' />
  // }
  console.log('host')

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
