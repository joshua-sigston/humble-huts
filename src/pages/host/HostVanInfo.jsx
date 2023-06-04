import React from 'react'

// Router
import { useOutletContext } from 'react-router'

// Styles
import styles from '../../styles/hut-card.module.css'
import { current } from '@reduxjs/toolkit'

const HostVanInfo = () => {
  const { currentVan } = useOutletContext()
  
  return (
    <section>
      <div className={styles.details_container}>
        <p>{currentVan.type}</p>
        <p>{currentVan.description}</p>
     </div>
    </section>
  )
}

export default HostVanInfo
