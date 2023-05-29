import React from 'react'

// Router
import { useParams } from 'react-router'

// Redux
import { useSelector } from 'react-redux';

// Styles
import styles from '../styles/hut-card.module.css'


const HutDetails = () => {
  const { hutList } = useSelector((store) => store.hutData);
  const params = useParams();

  const selectedHut = hutList.filter(item => {return item.id === parseInt(params.id)})

  return (
    <div className={styles.details_container}>
      <h2>{selectedHut[0].title}</h2>
      <img src={selectedHut[0].src} alt="hut" />
      <p>{selectedHut[0].price}</p>
      <p>{selectedHut[0].category}</p>
      <p>{selectedHut[0].description}</p>
    </div>
  )
}

export default HutDetails
