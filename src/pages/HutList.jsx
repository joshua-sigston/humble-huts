import React, { useEffect } from 'react'

// API
import { getHuts } from '../redux/hutSlice'

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Components
import HutCard from '../components/HutCard';

// Styles
import styles from '../styles/hut-list.module.css'

// Router
import { Link } from 'react-router-dom';

const HutList = () => {
    const { isLoading, hutList } = useSelector((store) => store.hutData);
    const disptach = useDispatch();

    useEffect(() => {
        disptach(getHuts())
        // eslint-disable-next-line 
    }, [])
  
    if (isLoading) {
        return (
          <div className='loading'>
            <h1>Loading...</h1>
          </div>
        );
      }
    
  return (
    <div className={styles.list_container}>
      {hutList.slice(0, 9).map(hut => {
        return(
          <Link to={`/huts/${hut.id}`} key={hut.id}>
            <HutCard {...hut}/>  
          </Link>
        )
      })}
    </div>
  )
}

export default HutList
