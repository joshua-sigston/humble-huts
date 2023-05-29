import React from 'react'

// Router
import { useParams, Link } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux';

// Styles
import styles from '../../styles/hut-card.module.css'

const HostHutDetails = () => {
  const { hutList } = useSelector((store) => store.hutData);
  const params = useParams();
  console.log(params)

  const selectedHut = hutList.filter(item => {return item.id === parseInt(params.id)})

  return (
    <section>
    <Link to='..' relative='path'>Back To My Huts</Link>
    <div className={styles.details_container}>
      <h1>my hut</h1>
      <h2>{selectedHut[0].title}</h2>
      <img src={selectedHut[0].src} alt="hut" />
      <p>{selectedHut[0].price}</p>
      <p>{selectedHut[0].category}</p>
      <p>{selectedHut[0].description}</p>
    </div>
    </section>
  )
}

export default HostHutDetails
