import React from 'react'

// Server
import '../server'

// API
import { getVans } from '../api'

// Components
import VanCard from '../components/VanCard';

// Styles
import styles from '../styles/van-list.module.css'

// Router
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';

export function loader() {
  return getVans()
}

const VanList = () => {
  const [ search, setSearch ] = useSearchParams();
  const vanList = useLoaderData();
  
  const typeFilter = search.get('type')
    
  const filteredVans = typeFilter ? vanList.filter(van => van.type === typeFilter) : vanList;

  const activeLink = {
    color: '#C0ADBA'
  }
    
  return (
    <div>

      <nav className={styles.type_nav_container}>
        <Link to='.' 
              style={typeFilter === null ? activeLink : null}
              className={styles.type_link}>
          all Vans
        </Link>

        <Link to='?type=simple' 
              style={typeFilter === 'simple' ? activeLink : null}
              className={styles.type_link}>
          simple
        </Link>

        <Link to='?type=rugged' 
              style={typeFilter === 'rugged' ? activeLink : null}
              className={styles.type_link}>
          rugged
        </Link>

        <Link to='?type=luxury' 
              style={typeFilter === 'luxury' ? activeLink : null}
              className={styles.type_link}>
          luxury
        </Link>
      </nav>

      <div className={styles.list_container}>
        {filteredVans.map(van => {
          return(
            <Link to={`${van.id}`} 
                  state={{ search: `?${search.toString()}`, type: typeFilter}} key={van.id}>
              <VanCard {...van}/>  
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default VanList
