import React from 'react'

// Styles
import styles from '../styles/hut-card.module.css'


const HutCard = ({title, src, price, description, category, id}) => {

  return (
    <div className={styles.card_container}>
      <img src={src} alt="a hut" />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  )
}

export default HutCard
