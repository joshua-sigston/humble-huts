import React from 'react'

// Redux
import { useSelector } from 'react-redux';

// Router
import { Link } from 'react-router-dom';

// Components
import HutCard from '../../components/HutCard';

const HostHutList = () => {
  const { hutList } = useSelector((store) => store.hutData);

  const ownedHuts = hutList.filter(item => {return item.hostID === 1})
  
  return (
    <div>
      <h1>My Huts</h1>
      {ownedHuts.map(hut => {
        return(
          <Link to={`/host/my-huts/${hut.id}`} key={hut.id}>
            <HutCard {...hut}/>  
          </Link>
        )
      })}
    </div>
  )
}

export default HostHutList
