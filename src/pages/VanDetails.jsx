import React from 'react'

// Router
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom'

// Styles
import styles from '../styles/van-card.module.css'

// API
import { getVans } from '../api'

export function loader({params}) {
  return getVans(params.id)
}

const HutDetails = () => {
  const location = useLocation();
  const van = useLoaderData();

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <section>
      <Link to={`..${search}`} path='relative'>Back to {type}</Link>
        <div className={styles.van_container}>
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>
                {van.type}
            </i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>      
    </section>
  )
}

export default HutDetails
