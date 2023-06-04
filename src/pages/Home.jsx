import React from 'react'

// Router
import { NavLink } from 'react-router-dom'

// images
import homeImage from '../images/pexels-clem-onojeghuo-173287.jpg'

// Styles
import styles from '../styles/home-page.module.css'
 
const Home = () => {
  return (
    <div className={styles.home_container}>
      <h2>Prepared to make a classical jounrey with classical style.</h2>
      <NavLink  to='vans' className={styles.home_link}>Explore The Vans</NavLink>
    </div>
  )
}

export default Home