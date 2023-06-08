import React, {useEffect, useState} from 'react'

// Router
import { useParams, Link, Outlet, NavLink, useLoaderData } from 'react-router-dom'

// API
import { getHostVans } from '../../api'

// Styles
import styles from '../../styles/host-pages.module.css'

export function loader({ params }) {
  return getHostVans(params.id)
}

const HostVanDetails = () => {
  const currentVan = useLoaderData()
  
  const activeLink = {
    color: 'brown',
    fontWeight: 'bold'
  }

if (!currentVan) {
  return <h1>Loading...</h1>
}

  return (
    <section className={styles.host_van_details_container}>
    <Link
          to=".."
          relative="path"
          className={styles.back_btn}
      >&larr; <span>Back to all vans</span></Link>

      <div className={styles.host_van_details}>
        <div className={styles.top_row}>
            <img src={currentVan.imageUrl} />
            <div className={styles.left_col}>
                <i>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
            </div>
        </div>
      </div>

    <nav>
      <NavLink  to='.'
                end
                style={({isActive}) => isActive ? activeLink : null}>
        Details
      </NavLink>

      <NavLink  to='pricing'
                style={({isActive}) => isActive ? activeLink : null}>
        Pricing
      </NavLink>

      <NavLink  to='photos'
                style={({isActive}) => isActive ? activeLink : null}>
        Photos
      </NavLink>
    </nav>
    <Outlet context={{currentVan}}/>
    </section>
  )
}

export default HostVanDetails
