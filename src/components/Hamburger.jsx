import React from 'react'

// Styles
import styles from '../styles/header.module.css'

const Hamburger = ({handleMobileNav}) => {

  const handleHamburger = () => {
    handleMobileNav()
  }

  return (
    <div className={styles.hamburger_container} onClick={handleHamburger}>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
    </div>
  )
}

export default Hamburger
