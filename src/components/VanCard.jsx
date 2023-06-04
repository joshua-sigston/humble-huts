import React from 'react'

// Styles
import styles from '../styles/hut-card.module.css'


const HutCard = ({imageUrl, name, type, price}) => {

  return (
    <div className={styles.card_container}>
      <img src={imageUrl} alt="a hut" />
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{price}</p>
    </div>
  )
}

export default HutCard
